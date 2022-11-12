import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalProps,
  Button,
} from '../src';

const meta: Meta = {
  title: 'Others/Modal',
  component: Modal,
};

export default meta;

const Template: Story<ModalProps> = _ => {
  const [open, setOpen] = useState(false);
  function handleClick(e) {
    setOpen(!open);
    e.preventDefault();
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleClick}>Open Modal</Button>
      <Modal open={open} onClose={handleClose}>
        <ModalHeader
          title="Consectetur nostrud nulla duis."
          label="Optional label"
        />
        <ModalBody>
          Esse minim quis reprehenderit exercitation consectetur do culpa
          cillum. Tempor in laborum sit minim amet aliquip deserunt mollit
          commodo incididunt fugiat excepteur. Quis culpa incididunt laborum do
          Lorem cupidatat ad velit irure exercitation est amet. Officia
          reprehenderit tempor ut consectetur amet quis consequat culpa minim
          sint adipisicing aliquip incididunt. Ut laboris Lorem fugiat id anim
          do dolor ipsum.
        </ModalBody>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
