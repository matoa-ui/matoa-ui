import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropzone, DropzoneProps } from '../src';

const meta: Meta = {
  title: 'Dropzone',
  component: Dropzone,
};

export default meta;

const Template: Story<DropzoneProps> = args => (
  <Dropzone {...args}>Choose File</Dropzone>
);

export const Default = Template.bind({});

Default.args = {};
