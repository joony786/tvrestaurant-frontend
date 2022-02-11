import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface RegisterInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  display: block;
  border: 1px solid #bbbfca;
  background: white;
  padding: 0.5rem;
  color: #000;
  font-size: 1rem;
  line-height: 1rem;
  outline: none;
  border-radius: 4px;
  &:focus {
    border: 1px solid #000;
  }
`;

const RegisterInput: React.FC<RegisterInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default RegisterInput;
