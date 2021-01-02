import React from 'react';

import { Container, ModalContent } from './styles';

function Modals({ children, open, ...props }) {
  return (
    <ModalContent open={open}>
      <Container {...props}>{children}</Container>
    </ModalContent>
  );
}

export default Modals;
