import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DropdownMenu, DropdownMenuProps, Anchor } from '../src';

const meta: Meta = {
  title: 'DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    icon: {
      defaultValue: 'Menu',
    },
    text: {
      defaultValue: 'Menu',
    },
    items: {
      defaultValue: [
        {
          key: 'One',
          content: <Anchor href="#">One</Anchor>,
        },
        {
          key: 'Two',
          content: <Anchor href="#">Two</Anchor>,
        },
        {
          key: 'Three',
          content: <Anchor href="#">Three</Anchor>,
        },
      ],
    },
  },
};

export default meta;

const Template: Story<DropdownMenuProps> = args => <DropdownMenu {...args} />;

export const Default = Template.bind({});

Default.args = {};
