import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField, withValidation } from '../src';

const meta: Meta = {
  title: 'InputError',
  component: TextField,
};

export default meta;

const RequiredTextField = withValidation(
  ({ value }) => !value && 'Input is required'
)(TextField);

const Template: Story = _ => <RequiredTextField />;

export const Default = Template.bind({});
