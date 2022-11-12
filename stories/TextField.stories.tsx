import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '../src';

const meta: Meta = {
  title: 'Forms/TextField',
  component: TextField,
  argTypes: {
    label: {
      defaultValue: 'Label',
    },
  },
};

export default meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const Default = Template.bind({});

Default.args = {};
