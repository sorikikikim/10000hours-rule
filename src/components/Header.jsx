import React from "react";
import {
    StyledP,
    StyledComma,
    StyledTypography,
    StyledSpan,
    StyledContainer,
} from "./Header.style";

const Header = () => {
    return (
        <header>
            <StyledContainer className="img-container">
                <img src="logo-img.svg" className="clockImg" alt="clock" />
                <img src="Frame.png" className="logoImg" alt="logo" />
            </StyledContainer>
            <StyledP>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</StyledP>
            <StyledContainer className="text-container">
                <StyledComma>“</StyledComma>
                <StyledTypography>
                    <StyledSpan>1만 시간의 법칙</StyledSpan>은
                    <br />
                    어떤 분야의 전문가가 되기 위해서는 <br />
                    최소한 1만 시간의 훈련이 필요하다는 법칙이다.
                </StyledTypography>
                <StyledComma>”</StyledComma>
            </StyledContainer>
        </header>
    );
};

export default Header;
