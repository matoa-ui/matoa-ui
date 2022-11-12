import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Sidebar,
  SidebarProps,
  Button,
  PaddedContainer,
} from '../src';

const meta: Meta = {
  title: 'Others/Sidebar',
  component: Sidebar,
  argTypes: {
    activator: {
      defaultValue: <Button>Show sidebar</Button>,
    },
  },
};

export default meta;

const Template: Story<SidebarProps> = args => (
  <Sidebar {...args}>
    <PaddedContainer gutter="medium">Some content</PaddedContainer>
  </Sidebar>
);

export const Default = Template.bind({});

Default.args = {};
