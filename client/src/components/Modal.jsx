/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  z-index: 1 !important;
  position: fixed !important;
  top: 0px !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: center!important;
  justify-content: center !important;
`;

const DarkBackground = styled.div`
  z-index: 5 !important;
  background: black;
  opacity: 50%;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const ModalContainer = styled.div`
  position: absolute;
  display: flex !important;
  justify-content: center !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  background: rgb(255, 255, 255, 1) !important;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
  z-index: 10;
  position: relative !important;
  max-width: 568px !important;
  width: 100vw !important;
  flex-direction: column !important;
  border-top-left-radius: 12px !important;
  border-top-right-radius: 12px !important;
  border-bottom-left-radius: 12px !important;
  border-bottom-right-radius: 12px !important;
  opacity: 100%;

  @keyframes slidein {
    from {
      margin-top: 100%;
      heigth: 100%;

    }
    to {
      margin-top: 0%;
      height: 100%;
      opacity: 100%;
    }
  }
`;
const Top = styled.div`
  display: flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: center !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 600 !important;
  min-height: 64px;
  width: 100%
`;
const Middle = styled.div`
  display: flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: center !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
  height: 120px;
  width: 100%;
  font-size: 16px !important;
  font-weight: 800 !important;
`;
const Bottom = styled.div`
  display: flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: space-between !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
  padding: 0px 24px !important;
  color: rgb(34, 34, 34) !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 20px !important;
  min-height: 64px;
  text-decoration: underline;
  cursor: pointer;
`;
const CloseButton = styled.button`
  appearance: none !important;
  display: inline-block !important;
  border-radius: 50% !important;
  border: none !important;
  outline: none !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: absolute !important;
  left: 20px;
  background: transparent !important;
`;
const SaveButton = styled.button`
  appearance: none !important;
  display: inline-block !important;
  border-radius: 50% !important;
  border: none !important;
  outline: none !important;
  color: rgb(34, 34, 34) !important;
  cursor: pointer !important;
  touch-action: manipulation !important;
  position: absolute !important;
  background: transparent !important;
  font-weight: 600 !important;
  left: 20px;
`;
const AnyTime = styled.div`
display: inline-block !important;
color: rgb(34, 34, 34) !important;
touch-action: manipulation !important;
position: relative !important;
background: transparent !important;
font-weight: 600 !important;
top: -26px;
left: -234px;
margin-bottom: 4px !important;
font-size: 12px !important;
line-height: 16px !important;
font-weight: 400 !important;
color: rgb(113, 113, 113) !important;
`;
const Modal = (props) => {
  const {
    handleShowModal, showModal, toggleSave,
  } = props;

  // let fade = '';
  // if (showModal && isModalClicked) {
  //   fade = 'slideIn';
  // } else if (!showModal && isModalClicked) {
  //   fade = 'slideOut';
  // }

  // if (!showModal) {
  //   return null;
  // }
  return (
    <OuterContainer className="OuterContainer">
      <DarkBackground className="DarkBackground" />
      <ModalContainer className="ModalContainer">
        <Top className="Top">
          <CloseButton className="CloseButton" onClick={() => { handleShowModal(); }}>X</CloseButton>
          Save to a list
        </Top>
        <Middle Middle="Middle">
          <AnyTime>
            Any time
          </AnyTime>
          <SaveButton className="SaveButton" onClick={() => { toggleSave(); handleShowModal(); }}>
            Vacation spots
          </SaveButton>
        </Middle>
        <Bottom className="Bottom">Create a list</Bottom>
      </ModalContainer>
    </OuterContainer>
  );
};

export default Modal;
