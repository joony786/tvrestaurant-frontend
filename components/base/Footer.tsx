import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 4rem;
  bottom: 0;
  background-color: #e8e8e8;
  padding: 1rem 2rem;
  color: #495464;
  .copy-right {
  }
`;

const Footer = () => {
  return (
    <Container>
      {/* <div>Email: seungbeenoh@gmail.com</div> */}
      <div className="copy-right">© 2020 tvrestaurant All right reserved</div>
    </Container>
  );
};

export default Footer;
