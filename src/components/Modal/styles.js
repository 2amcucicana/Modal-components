import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  border: 1px solid transparent;
  border-radius: 4px;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
