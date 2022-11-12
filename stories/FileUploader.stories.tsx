import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FileUploader, FileUploaderProps, SimpleEventManager } from '../src';

const myEventManager = new SimpleEventManager();

const meta: Meta = {
  title: 'FileUploader',
  component: FileUploader,
  argTypes: {
    events: myEventManager,
    multiple: {
      defaultValue: true,
    },
    onChange: {
      defaultValue: e => console.log(e),
    },
  },
};

export default meta;

const Template: Story<FileUploaderProps> = args => (
  <FileUploader {...args}>Add Files</FileUploader>
);

export const Default = Template.bind({});

Default.args = {};
