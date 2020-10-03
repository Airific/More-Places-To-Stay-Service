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
  padding-top: 12px !important;
  display: flex !important;
  flex-direction: row !important;
  align-items: center!important;
  justify-content: center !important;
`;

const ModalContainer = styled.div`
  position: absolute;
  display: flex !important;
  justify-content: center !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  background: rgb(255, 255, 255) !important;
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
  // animation-duration: 400ms !important;
  // animation-iteration-count: 1 !important;
  // animation-fill-mode: both !important;
`;
const Top = styled.div`
  display: flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: space-between !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
  padding: 0px 24px !important;
  color: rgb(34, 34, 34) !important;
  font-size: 16px !important;
  line-height: 20px !important;
  font-weight: 800 !important;
  min-height: 64px;
  width:
`;
const Bottom = styled.div`
display: flex !important;
flex: 0 0 auto !important;
align-items: center !important;
justify-content: space-between !important;
border-bottom: 1px solid rgb(235, 235, 235) !important;
padding: 0px 24px !important;
color: rgb(34, 34, 34) !important;
font-size: 16px !important;
line-height: 20px !important;
font-weight: 800 !important;
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
position: relative !important;
background: transparent !important;
`;
const Modal = (props) => {
  const {
    handleShowModal, isModalClicked, showModal,
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
    <OuterContainer>
      <ModalContainer className="ModalContainer">
        <Top>
          <CloseButton onClick={handleShowModal}>X</CloseButton>
          Save to a list
        </Top>
        <Bottom>Create a list</Bottom>
      </ModalContainer>
    </OuterContainer>
  );
};

export default Modal;
