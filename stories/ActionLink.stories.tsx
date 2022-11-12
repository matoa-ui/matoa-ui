import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ActionLink, ActionLinkProps } from '../src';

const meta: Meta = {
  title: 'ActionLink',
  component: ActionLink,
  argTypes: {
    href: {
      defaultValue: '#🍕',
    },
    children: {
      defaultValue: 'Click me',
    },
  },
};

export default meta;

const Template: Story<ActionLinkProps> = args => <ActionLink {...args} />;

export const Default = Template.bind({});

Default.args = {};
