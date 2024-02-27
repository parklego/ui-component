import styled from "styled-components";

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Modal = ({ onClose, title, content }: ModalProps) => {
  return (
    <Backdrop>
      <ContentWrapper>
        <div className="flex justify-end">
          <button onClick={onClose}>닫기</button>
        </div>
        <ContentTitle>{title}</ContentTitle>
        <ContentBody>{content}</ContentBody>
      </ContentWrapper>
    </Backdrop>
  );
};

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ContentWrapper = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 950px;
  width: 80%;
  height: 80%;
  overflow: auto;
`;

const ContentTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const ContentBody = styled.div`
  white-space: pre-wrap;
`;
