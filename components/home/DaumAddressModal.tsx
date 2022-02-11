import React from 'react';
import styled from 'styled-components';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { MdOutlineClose } from 'react-icons/md';

interface DaumAddressModalPorps {
  onClose: () => void;
  onComplete: (address: Address) => void;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  position: absolute;
  width: 20rem;
  height: 35rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #ececec;
  button {
    position: relative;
    border: none;
    padding: 10px;
    float: right;
    cursor: pointer;
  }
  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
  .daum-post-code {
    width: 100% !important;
    height: 90% !important;
  }
`;

const DaumAddressModal: React.FC<DaumAddressModalPorps> = ({
  onClose,
  onComplete,
}) => {
  return (
    <Container>
      <Modal>
        <button onClick={onClose}>
          <MdOutlineClose />
        </button>
        <DaumPostcode
          className="daum-post-code"
          onComplete={onComplete}
          focusInput
        />
      </Modal>
    </Container>
  );
};

export default DaumAddressModal;
