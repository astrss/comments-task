import {useState, useEffect} from "react";
import {useQuery, useInfiniteQuery} from "@tanstack/react-query";
import getCommentsRequest from "./api/comments/getCommentsRequest";
import getAuthorsRequest from "./api/authors/getAuthorsRequest";
import createCommentsTree from "./lib/createCommentsTree";
import getTotalLikesAndComments from "./lib/getTotalLikesAndComments";
import toAuthorsMap from "./lib/toAuthorsMap";
import {
    CommentsResponse,
    BaseCommentsResponse,
    Author,
    AuthorMap,
    LikesState,
} from "./App.types";

const useComments = () => {
    const [totalComments, setTotalComments] = useState(0);
    const [totalLikes, setTotalLikes] = useState<LikesState>({allLikes: 0});

    const commentsResult = useInfiniteQuery<
        BaseCommentsResponse,
        Error,
        CommentsResponse
    >({
        queryKey: ["comments"],
        queryFn: ({pageParam}) => getCommentsRequest(pageParam as number),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            return lastPage.pagination.page < lastPage.pagination.total_pages
                ? lastPage.pagination.page + 1
                : undefined;
        },
        select: (data) => {
            const allComments = data.pages.flatMap((page) =>
                createCommentsTree(page.data),
            );

            return {
                pagination: data.pages[data.pages.length - 1].pagination,
                data: allComments,
            };
        },
    });

    const authorsResult = useQuery<Author[], Error, AuthorMap>({
        queryKey: ["authors"],
        queryFn: () => getAuthorsRequest(),
        select: (authors) => toAuthorsMap(authors),
    });

    const getNextPage = () => commentsResult.fetchNextPage();

    useEffect(() => {
        if (commentsResult.data) {
            const {likes, comments} = getTotalLikesAndComments(
                commentsResult.data.data,
            );
            setTotalLikes((prev: LikesState) => {
                const localLikesAdded = Object.keys(prev).reduce((acc, key) => {
                    const numKey = Number(key);
                    if (!isNaN(numKey) && prev[numKey] === true) {
                        acc += 1;
                    }
                    return acc;
                }, 0);

                const updatedAllLikes = likes + localLikesAdded;

                return {
                    ...prev,
                    allLikes: updatedAllLikes,
                };
            });

            setTotalComments(comments);
        }
    }, [commentsResult.data]);

    const likeClick = (id: number) => () => {
        setTotalLikes((prev) => {
            const isLiked = !prev[id];
            const likeChange = isLiked ? 1 : -1;

            return {
                ...prev,
                [id]: isLiked,
                allLikes: prev.allLikes + likeChange,
            };
        });
    };

    return {
        authorsResult,
        commentsResult,
        getNextPage,
        totalComments,
        totalLikes,
        likeClick,
    };
};

export default useComments;
