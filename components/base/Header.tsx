import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Address } from 'react-daum-postcode';
import DaumAddressModal from '../home/DaumAddressModal';

interface HeaderProps {
  onChange: (address: string) => void;
}

const Cotainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 0.5rem;
`;

const Left = styled.div`
  img {
    height: 1.2rem;
  }
  margin-right: 1rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  min-width: 1rem;
  .address {
    color: #000;
    font-weight: 600;
    font-size: ${({ theme }) => theme.font.small};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  button {
    background-color: transparent;
    border-color: transparent;
    color: #283c63;
    border: none;
    cursor: pointer;
  }
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const Header: React.FC<HeaderProps> = ({ onChange }) => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onComplete = (address: Address) => {
    setOpen(false);
    setAddress(address.address);
    onChange(address.address);
  };

  return (
    <Cotainer>
      <Left>
        <img src="/logo.svg" />
      </Left>
      <Right>
        <div className="address">
          {address ? address : '주소를 설정해주세요'}
        </div>
        <button onClick={(e) => onOpen()}>
          <MdKeyboardArrowDown />
        </button>
      </Right>
      {open && <DaumAddressModal onClose={onClose} onComplete={onComplete} />}
    </Cotainer>
  );
};

export default Header;
