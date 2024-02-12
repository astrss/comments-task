import {css} from "styled-components";

const mobile = (props: string) => css`
    @media (max-width: 768px) {
        ${props}
    }
`;

export default mobile;
