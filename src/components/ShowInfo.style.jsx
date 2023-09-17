import styled, { css } from "styled-components";
import { fontCss } from "./Header.style";

export const StyledSpan = styled.span`
    ${fontCss}
    font-weight: 700;
    font-size: 72px;
    margin: 0 12px;
`;

export const btnFrame = css`
    ${fontCss}
    padding: 21px 49px;
    border-radius: 56px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    font-weight: 700;
    color: #5b2386;
    cursor: pointer;
`;

export const LinkBtn = styled.button`
    ${btnFrame}
    background: #fcee21;
    margin: 115px 0;
`;

export const ShareBtn = styled.button`
    ${btnFrame}
    background: #FFF;
    margin: 115px 0;
`;

export const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 18px;
`;

export const StyledTypography = styled.p`
    ${fontCss}
    display: inline-flex;
    align-items: center;
    gap: 12px;
`;
