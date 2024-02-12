import formatTime from "./formatTime";
import {CommentStructure, BaseComment} from "../App.types";

const createCommentsTree = (comments: BaseComment[]): CommentStructure[] => {
    const commentsById: Record<
        number,
        CommentStructure & {children: CommentStructure[]}
    > = {};
    const rootComments: CommentStructure[] = [];

    comments.forEach((comment) => {
        commentsById[comment.id] = {
            ...comment,
            created: formatTime(comment.created),
            children: [],
        };
    });

    comments.forEach((comment) => {
        if (comment.parent === null) {
            rootComments.push(commentsById[comment.id]);
        } else {
            if (commentsById[comment.parent]) {
                commentsById[comment.parent].children.push(
                    commentsById[comment.id],
                );
            }
        }
    });

    return rootComments;
};

export default createCommentsTree;
