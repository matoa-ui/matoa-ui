import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PasswordField, PasswordFieldProps } from '../src';

const meta: Meta = {
  title: 'PasswordField',
  component: PasswordField,
  argTypes: {
    label: {
      defaultValue: 'Password',
    },
    error: {
      defaultValue: 'Incorrect password',
    },
    value: {
      defaultValue: '123456789',
    },
  },
};

export default meta;

const Template: Story<PasswordFieldProps> = args => <PasswordField {...args} />;

export const Default = Template.bind({});

Default.args = {};
