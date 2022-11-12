import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CloseButton } from '../src';

const meta: Meta = {
  title: 'CloseButton',
  component: CloseButton,
};

export default meta;

const Template: Story = _ => (
  <div style={{ position: 'relative', height: '50px', width: '50px' }}>
    <CloseButton />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
