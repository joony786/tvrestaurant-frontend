import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import IconButton from '../common/Iconbutton';

interface DrawerProps {
  open: boolean;
}

const GlobalStyle = createGlobalStyle`
  body {
    [data-rsbs-overlay] {
      width: 28rem;
      bottom: 4rem;
      margin: 0 auto;
      transform: translateX(50%);
      
      ${({ theme }: any) => theme.media.md} {
        transform: translateX(0);
        width: 100%;
  }
      
    }
    [data-rsbs-header]:before {
      background: #283C63;
    }
  }
`;

const BottomSheetHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  .number {
    font-weight: 600;
    color: #283c63;
  }
`;

const StoreListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e8e8e8;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  div {
    width: 5rem;
    height: 5rem;
    background: #f9f3ed;
  }
`;

const ContentContainer = styled.div`
  flex: 2;
  color: #495464;
  .title {
    font-weight: 600;
    font-size: 16px;
    color: #495464;
  }
  .state {
    font-size: 13px;
    font-weight: 700;
  }
  .time {
    font-size: 13px;
    font-weight: 500;
  }
  .distace,
  .menu {
    font-size: 14px;
    font-weight: 500;
  }
  div + div {
    margin: 10px 0;
  }
  span + span {
    border-left: 1px solid #e8e8e8;
    margin-left: 10px;
    padding-left: 10px;
  }
`;

const LikedContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 12px;
    color: #f85f73;
  }
`;

const Drawer: React.FC<DrawerProps> = ({ open }) => {
  const onDismiss = () => {
    // setOpen(true);
  };

  return (
    <>
      <GlobalStyle />
      <BottomSheet
        open={true}
        // onDismiss={onDismiss}
        blocking={false}
        snapPoints={({ headerHeight, maxHeight }) => [
          headerHeight,
          maxHeight - 64 - 64,
        ]}
        header={
          <BottomSheetHeader>
            <span className="number">0</span>
            <span>개의 맛집을 찾았어요.</span>
          </BottomSheetHeader>
        }
      >
        <StoreListItem>
          <ImageContainer>
            <div></div>
          </ImageContainer>
          <ContentContainer>
            <div className="title">골목 식당</div>
            <div>
              <span className="state">영업중</span>
              <span className="time">11:00 ~ 18:00</span>
            </div>
            <div>
              <span className="distace">300m</span>
              <span className="menu">크로와상, 타르트</span>
            </div>
          </ContentContainer>
          <LikedContainer>
            {/* <IconButton
            width={like.width}
            height={like.height}
            defaultSrc={like.src}
            activeSrc={liked.src}
            active={active}
            onToggle={onToggleLike}
          /> */}
            <span>0</span>
          </LikedContainer>
        </StoreListItem>
      </BottomSheet>
    </>
  );
};

export default Drawer;
