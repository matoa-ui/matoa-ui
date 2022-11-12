import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs, TabPage, TabPageProps } from '../src';

const meta: Meta = {
  title: 'Navigation/TabPage',
  component: TabPage,
  argTypes: {
    header: {
      defaultValue: 'Title of the tab',
    },
  },
};

export default meta;

const Template: Story<TabPageProps> = args => (
  <Tabs>
    <TabPage {...args}>Content of the tab</TabPage>
  </Tabs>
);

export const Default = Template.bind({});

Default.args = {};
