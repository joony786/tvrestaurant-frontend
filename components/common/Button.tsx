import React from 'react';
import styled from 'styled-components';

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'size'> {
  color?: 'pink' | 'beige' | 'gray' | 'navy';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
}

const StyledButton = styled.button`
  color: white;
  font-weight: bold;
`;

const Button: React.FC<ButtonProps> = ({
  color = 'navy',
  size = 'md',
  children,
  ...rest
}) => {
  const restProps = rest as any;
  return (
    <StyledButton color={color} size={size} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
