import React, { useState } from "react";
import { StyledBtn, StyledInput, StyledTypography } from "./InputInfo.style";

const InputInfo = ({ setData }) => {
    const [field, setField] = useState("");
    const [hours, setHours] = useState(0);
    return (
        <>
            <StyledTypography>
                나는
                <StyledInput
                    className="input-box"
                    placeholder="예)프로그래밍"
                    type="text"
                    style={{ marginBottom: "27px" }}
                    onChange={(e) => {
                        setField(e.target.value);
                    }}
                />
                전문가가 될 것이다.
                <br />
                그래서 앞으로 매일 하루에
                <StyledInput
                    className="input-box"
                    placeholder="예)5시간"
                    type="number"
                    onChange={(e) => {
                        setHours(e.target.value);
                    }}
                />
                시간씩 훈련할 것이다.
            </StyledTypography>
            <div className="calculate-btn-div">
                <StyledBtn
                    onClick={() => {
                        setData({ field: field, hours: hours });
                    }}
                >
                    나는 며칠 동안 훈련을 해야 1만 시간이 될까?
                </StyledBtn>
                <img src="pointer.svg" className="pointerImg" alt="pointer"></img>
            </div>
        </>
    );
};

export default InputInfo;
