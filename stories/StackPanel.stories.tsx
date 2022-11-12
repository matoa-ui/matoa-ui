import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StackPanel, StackPanelProps, StackItem } from '../src';

const meta: Meta = {
  title: 'Basic/StackPanel',
  component: StackPanel,
};

export default meta;

const style = { background: 'gray', padding: '5px', margin: '5px' };

const Template: Story<StackPanelProps> = args => (
  <StackPanel {...args}>
    <StackItem style={style}>First</StackItem>
    <StackItem style={style}>Second</StackItem>
    <StackItem style={style}>Third</StackItem>
  </StackPanel>
);

export const Default = Template.bind({});

Default.args = {};
