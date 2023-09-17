import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
    width: 800px;
    height: 800px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
`;
const modalCss = css`
    color: #5b2386;
    font-family: "tvnEnjoy";
    font-size: 96px;
    font-weight: 700;
    line-height: 1;
`;

export const StyledP = styled.div`
    ${modalCss}
    padding: 76px 0 29px 0;
`;

export const StyledSpan = styled.div`
    ${modalCss}
    font-size: 36px;
    margin-top: 4px;
`;
