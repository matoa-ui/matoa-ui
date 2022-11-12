import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { WindowPopup, WindowPopupProps, Button } from '../src';

const meta: Meta = {
  title: 'Others/WindowPopup',
  component: WindowPopup,
};

export default meta;

const Template: Story<WindowPopupProps> = args => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Show window</Button>
      {open && (
        <WindowPopup onClick={() => setOpen(false)} label="Some label">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </WindowPopup>
      )}
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
