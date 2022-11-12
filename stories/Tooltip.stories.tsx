import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, TooltipProps, Avatar } from '../src';

const meta: Meta = {
  title: 'Others/Tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      defaultValue: 'Tooltip content',
    },
  },
};

export default meta;

const Template: Story<TooltipProps> = args => (
  <Tooltip {...args}>
    <Avatar initials="R" description="Sample" size="x-small" />
  </Tooltip>
);

export const Default = Template.bind({});

Default.args = {};
