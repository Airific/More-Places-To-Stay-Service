/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  display: flex !important;
  flex: 0 0 auto !important;
  align-items: center !important;
  justify-content: space-between !important;
`;

const Modal = (props) => {
  const {
    showModal, isModalClicked,
  } = props;

  let fade = '';
  if (showModal && isModalClicked) {
    fade = 'slideIn';
  } else if (!showModal && isModalClicked) {
    fade = 'slideOut';
  }

  if (!showModal) {
    return null;
  }
  return (
    <ModalContainer className="ModalContainer">
      <div>Saved List</div>
    </ModalContainer>
  );
};

export default Modal;
