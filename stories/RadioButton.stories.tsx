import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RadioButton, RadioButtonProps } from '../src';

const meta: Meta = {
  title: 'RadioButton',
  component: RadioButton,
};

export default meta;

const Template: Story<RadioButtonProps> = args => (
  <RadioButton {...args}>Controlled radio button</RadioButton>
);

export const Default = Template.bind({});

Default.args = {};
