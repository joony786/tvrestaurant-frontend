import React from 'react';
import styled from 'styled-components';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default HomeLayout;
