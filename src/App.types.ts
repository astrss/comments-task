export interface BaseComment {
    id: number;
    created: string;
    text: string;
    author: number;
    parent: number | null;
    likes: number;
}

export interface BaseCommentsResponse {
    data: BaseComment[];
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
}

export interface CommentStructure extends BaseComment {
    children: CommentStructure[];
}

export interface CommentsResponse extends Omit<BaseCommentsResponse, "data"> {
    data: CommentStructure[];
}

export interface Author {
    id: number;
    name: string;
    avatar: string;
}

export interface AuthorMap {
    [key: number]: Author;
}

export interface LikesState {
    allLikes: number;
    [key: number]: boolean;
}
