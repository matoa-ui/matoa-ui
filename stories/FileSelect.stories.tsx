import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FileSelect, FileSelectProps } from '../src';

const meta: Meta = {
  title: 'Forms/FileSelect',
  component: FileSelect,
  argTypes: {
    multiple: {
      defaultValue: true,
    },
  },
};

export default meta;

const Template: Story<FileSelectProps> = args => (
  <FileSelect {...args}>Add files</FileSelect>
);

export const Default = Template.bind({});

Default.args = {};
