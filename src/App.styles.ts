import styled from "styled-components";
import mobile from "./lib/mobileVersion";
import backgroundImage from "./assets/background/background.webp";

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${backgroundImage}) #101f25 no-repeat center / cover;
    overflow-x: hidden;
    font-size: 16px;
    color: #fff;
    ${mobile(`
        font-size: 14px;
    `)}
`;

export const CommentsWrapper = styled.div`
    max-width: 562px;
    padding: 52px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
    ${mobile(`
        padding: 32px 24px;
        gap: 24px;
    `)}
`;

export const CommentsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid #767676;
`;

export const AllComments = styled.span`
    font-weight: bold;
`;

export const Likes = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

export const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff0000;
    font-weight: bold;
`;

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 28px;
    ${mobile(`
        margin-top: 16px;
    `)}
`;

export const NextPageBtn = styled.div`
    width: 234px;
    height: 36px;
    border-radius: 4px;
    background-color: #313439;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
