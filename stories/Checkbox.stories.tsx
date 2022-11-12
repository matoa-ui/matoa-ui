import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../src';

const meta: Meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
};

export default meta;

const itemStyle = {
  verticalAlign: 'middle',
  margin: '0 5px',
};

const Template: Story<CheckboxProps> = args => (
  <>
    <Checkbox style={itemStyle}>First Item</Checkbox>
    <Checkbox style={itemStyle}>Second Item</Checkbox>
    <Checkbox style={itemStyle}>Third Item</Checkbox>
  </>
);

export const Default = Template.bind({});

Default.args = {};
