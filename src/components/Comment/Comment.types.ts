import {Author, CommentStructure, LikesState} from "../../App.types";

export interface CommentProps {
    author: Author;
    comment: CommentStructure;
    childrenLevel: number;
    likeClick: (id: number) => () => void;
    totalLikes: LikesState;
}
