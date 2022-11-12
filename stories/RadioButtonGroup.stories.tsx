import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  RadioButtonGroup,
  RadioButtonGroupProps,
  RadioButton,
} from '../src';

const meta: Meta = {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
};

export default meta;

const Template: Story<RadioButtonGroupProps> = args => (
  <RadioButtonGroup {...args}>
    <RadioButton>First</RadioButton>
    <RadioButton>Second</RadioButton>
    <RadioButton disabled>Third</RadioButton>
  </RadioButtonGroup>
);

export const Default = Template.bind({});

Default.args = {};
