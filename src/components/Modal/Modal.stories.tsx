import React, { useState } from 'react';
import { Modal } from '.';
import { Button } from '@components/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = ({ backdrop, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button text="Click me" onClick={() => setIsOpen(true)} />
      <Modal
        backdrop={backdrop}
        isVisible={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div style={{ minWidth: '200px', minHeight: '100px' }}>{children}</div>
      </Modal>
    </>
  );
};

export const modal = Template.bind({});
modal.args = {
  backdrop: true,
  children:
    'Modal can be closed by clicking on backdrop, or cross icon or pressing esc. Modal adapts to the content size inside it, try to write more',
};
