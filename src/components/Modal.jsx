import { StyledBtn } from "./InputInfo.style";
import { StyledDiv, StyledP, StyledSpan } from "./Modal.style";

const Modal = ({ isOpen, setIsOpen }) => {
    return (
        <>
            {isOpen && (
                <StyledDiv>
                    <StyledP>
                        화이팅!!♥♥♥ <br />
                        <StyledSpan>당신의 꿈을 응원합니다!</StyledSpan>
                    </StyledP>
                    <img src="licat.png" alt="licat" className="modal-img" />
                    <StyledBtn onClick={() => setIsOpen(false)}>
                        종료하고 진짜 훈련하러 가기 GO!GO!
                    </StyledBtn>
                </StyledDiv>
            )}
        </>
    );
};

export default Modal;
