import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Container,
  ContainerProps,
  StackPanel,
  StackItem,
} from '../src';

const meta: Meta = {
  title: 'Container',
  component: Container,
  argTypes: {
    maxWidth: {
      defaultValue: 200,
    },
    align: {
      defaultValue: 'left',
    },
  },
};

export default meta;

const style = { background: 'gray', padding: '5px', margin: '5px' };

const Template: Story<ContainerProps> = args => (
  <Container {...args}>
    <StackPanel>
      <StackItem style={style}>First</StackItem>
      <StackItem style={style}>Second</StackItem>
      <StackItem style={style}>Third</StackItem>
    </StackPanel>
  </Container>
);

export const Default = Template.bind({});

Default.args = {};
