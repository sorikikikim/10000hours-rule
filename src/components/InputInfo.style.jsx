import styled from "styled-components";
import { btnFrame } from "./ShowInfo.style";
import { fontCss } from "./Header.style";

export const StyledInput = styled.input`
    width: 228px;
    height: 57px;
    flex-shrink: 0;
    border-radius: 7px;
    background: #fff;
    text-align: center;
    margin: 0 17px;
`;

export const StyledBtn = styled.button`
    ${btnFrame}
    display: inline-block;
    background: #fcee21;
    position: relative;
    cursor: pointer;
`;

export const StyledTypography = styled.p`
    ${fontCss}
`;
