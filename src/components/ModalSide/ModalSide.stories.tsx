import React, { useState } from 'react';
import { ModalSide } from '.';
import { Button } from '@components/Button';

export default {
  title: 'Components/Modal Side',
  component: ModalSide,
};

const Template = ({ backdrop, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Button text="Click me" onClick={() => setIsOpen(true)} />
      <ModalSide
        backdrop={backdrop}
        isVisible={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div style={{ minWidth: '200px', minHeight: '100px' }}>{children}</div>
      </ModalSide>
    </div>
  );
};

export const modalSide = Template.bind({});
modalSide.args = {
  backdrop: true,
  children: 'Modal adapts to the content size inside it, try to write more',
};
