import styled, { css } from "styled-components";

export const fontCss = css`
    font-family: "GmarketSans";
    font-weight: 400;
    line-height: normal;
    text-align: center;
    font-size: 24px;
    color: #fff;
`;

const commaCss = css`
    ${fontCss}
    color: rgba(252, 238, 33, 0.3);
    font-size: 96px;
`;

export const StyledComma = styled.span`
    ${commaCss}
`;

export const StyledP = styled.p`
    ${fontCss}
    color: #f5df4d;
    font-family: "tvnEnjoy";
    font-size: 36px;
`;

export const StyledTypography = styled.p`
    ${fontCss}
    color: #fff;
    font-size: 18px;
		line-height: 1.8;
`;

export const StyledSpan = styled.span`
    color: #fff;
    ${fontCss}
    font-weight: 700;
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;
