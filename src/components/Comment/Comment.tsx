import React from "react";
import IconComponent from "../IconComponent/IconComponent";
import {CommentProps} from "./Comment.types";
import * as Styled from "./Comment.styles";

const Comment: React.FC<CommentProps> = ({
    author,
    comment,
    childrenLevel,
    likeClick,
    totalLikes,
}) => (
    <Styled.Comment $childrenLevel={childrenLevel}>
        <Styled.AuthorImg src={author.avatar} alt="logo" />
        <Styled.CommentInfo>
            <Styled.CommentHeader>
                <div>
                    <Styled.AuthorName>{author.name}</Styled.AuthorName>
                    <Styled.CommentTime>{comment.created}</Styled.CommentTime>
                </div>
                <Styled.Likes onClick={likeClick(comment.id)}>
                    <IconComponent
                        iconName={
                            totalLikes[comment.id] ? "RedHeart" : "EmptyHeart"
                        }
                    />{" "}
                    {totalLikes[comment.id] ? comment.likes + 1 : comment.likes}
                </Styled.Likes>
            </Styled.CommentHeader>
            <span>{comment.text}</span>
        </Styled.CommentInfo>
    </Styled.Comment>
);

export default Comment;
