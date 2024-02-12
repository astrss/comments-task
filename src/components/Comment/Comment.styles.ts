import styled from "styled-components";
import mobile from "../../lib/mobileVersion";

export const Likes = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
`;

type CommentStyleProps = {$childrenLevel: number};
export const Comment = styled.div<CommentStyleProps>`
    display: flex;
    gap: 20px;
    margin-left: ${({$childrenLevel}) => `${$childrenLevel * 34}px`};
    ${mobile(`
        margin-left: ${({$childrenLevel}: {$childrenLevel: number}) =>
            `${$childrenLevel * 20}px`};
    `)}
`;

export const AuthorImg = styled.img`
    width: 68px;
    height: 68px;
    min-width: 68px;
    min-height: 68px;
    ${mobile(`
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
    `)}
    border-radius: 50%;
`;

export const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
    ${mobile(`
        height: 40px;
    `)}
`;

export const AuthorName = styled.div`
    font-weight: bold;
    margin-bottom: 4px;
`;

export const CommentTime = styled.div`
    color: #8297ab;
`;

export const CommentInfo = styled.div`
    width: 100%;
`;
