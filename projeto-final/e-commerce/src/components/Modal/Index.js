import React from 'react';
import { BiX } from 'react-icons/bi';
import { StyledModal, StyledModalContent, StyledModalContainer, StyledModalIcon } from './styled';

const Modal = ({ children, active, onClick }) => {
  return (
    <>
      {active && (
        <StyledModal>
          <StyledModalContainer>
            <StyledModalContent>
              <StyledModalIcon>
                <BiX size="35px" onClick={onClick} />
              </StyledModalIcon>
              {children}
            </StyledModalContent>
          </StyledModalContainer>
        </StyledModal>
      )}
    </>
  )
}

export default Modal;