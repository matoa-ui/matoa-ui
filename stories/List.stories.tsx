import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List, ListProps, ListItem } from '../src';

const meta: Meta = {
  title: 'Data/List',
  component: List,
};

export default meta;

const Template: Story<ListProps> = args => (
  <List {...args}>
    <ListItem>first</ListItem>
    <ListItem>second</ListItem>
    <ListItem>third</ListItem>
  </List>
);

export const Default = Template.bind({});

Default.args = {};
