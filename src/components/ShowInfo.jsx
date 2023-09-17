import React, { useState } from "react";
import {
    LinkBtn,
    ShareBtn,
    StyledDiv,
    StyledSpan,
    StyledTypography,
} from "./ShowInfo.style";
import Modal from "./Modal";

const ShowInfo = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const calculateTrainingDays = () => {
        if (data.hours >= 0 && data.hours <= 24) {
            return parseInt(10000 / data.hours);
        }
        return null;
    };

    const showAlert = () => {
        alert("잘못된 입력 값 입니다. 24 이하의 양수를 입력하세요.");
    };
    return (
        <>
            {data.field && data.hours && (
                <>
                    <StyledTypography>
                        당신은<StyledSpan>{data.field}</StyledSpan>전문가가 되기
                        위해서
                    </StyledTypography>
                    <br />

                    {data.hours > 0 && data.hours <= 24 ? (
                        <StyledTypography>
                            대략
                            <StyledSpan>{calculateTrainingDays()}</StyledSpan>일
                            이상 훈련하셔야 합니다! :)
                        </StyledTypography>
                    ) : (
                        showAlert() // 경고 표시
                    )}
                    <StyledDiv>
                        <LinkBtn
                            onClick={() => {
                                setIsOpen(true);
                            }}
                        >
                            훈련하러 가기 GO!GO!
                        </LinkBtn>
                        <ShareBtn>공유하기</ShareBtn>
                    </StyledDiv>
                </>
            )}
            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            )}
        </>
    );
};

export default ShowInfo;
