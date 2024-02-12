import React, {Fragment} from "react";
import useComments from "./App.module";
import IconComponent from "./components/IconComponent/IconComponent";
import Comment from "./components/Comment/Comment";
import {CommentStructure} from "./App.types";
import * as Styled from "./App.styles";

const App: React.FC = () => {
    const {
        authorsResult,
        commentsResult,
        getNextPage,
        totalComments,
        totalLikes,
        likeClick,
    } = useComments();

    const commentsTree = (
        comments: CommentStructure[] | undefined,
        childrenLevel: number,
    ) => {
        if (!comments?.length || !authorsResult.data) {
            return null;
        }

        return comments.map((comment) => (
            <Fragment key={comment.id}>
                <Comment
                    comment={comment}
                    author={authorsResult.data[comment.author]}
                    childrenLevel={childrenLevel}
                    likeClick={likeClick}
                    totalLikes={totalLikes}
                />
                {commentsTree(comment.children, childrenLevel + 1)}
            </Fragment>
        ));
    };

    const queryStatus = () => {
        if (commentsResult.isLoading || authorsResult.isLoading) {
            return <Styled.Loading>Loading...</Styled.Loading>;
        }

        if (commentsResult.isError || authorsResult.isError) {
            return (
                <Styled.ErrorMessage>
                    {commentsResult.error?.message ||
                        authorsResult.error?.message}
                </Styled.ErrorMessage>
            );
        }
    };

    return (
        <Styled.Main>
            <Styled.CommentsWrapper>
                <Styled.CommentsHeader>
                    <Styled.AllComments>
                        {totalComments} комментариев
                    </Styled.AllComments>
                    <Styled.Likes>
                        <IconComponent iconName="GrayHeart" />{" "}
                        {totalLikes.allLikes}
                    </Styled.Likes>
                </Styled.CommentsHeader>
                {commentsTree(commentsResult.data?.data, 0)}
                {queryStatus()}
                {commentsResult.hasNextPage && (
                    <Styled.BtnWrapper>
                        <Styled.NextPageBtn onClick={getNextPage}>
                            Загрузить еще
                        </Styled.NextPageBtn>
                    </Styled.BtnWrapper>
                )}
            </Styled.CommentsWrapper>
        </Styled.Main>
    );
};

export default App;
