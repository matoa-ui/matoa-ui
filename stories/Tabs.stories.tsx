import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs, TabsProps, TabPage } from '../src';

const meta: Meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  argTypes: {
    defaultIndex: {
      defaultValue: 2,
    },
  },
};

export default meta;

const Template: Story<TabsProps> = args => (
  <Tabs {...args}>
    <TabPage header="First">First content.</TabPage>
    <TabPage header="Second">Second content.</TabPage>
    <TabPage header="Third">Third content.</TabPage>
    <TabPage header="Last">Final content.</TabPage>
  </Tabs>
);

export const Default = Template.bind({});

Default.args = {};
