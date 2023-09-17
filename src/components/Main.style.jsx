import styled from "styled-components";
import { fontCss } from "./style/Header.style";

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
    ${fontCss}
    display: inline-flex;
    padding: 21px 49px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 56px;
    background: #fcee21;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

    color: #5b2386;
    font-weight: 700;

    margin: 115px;
`;
