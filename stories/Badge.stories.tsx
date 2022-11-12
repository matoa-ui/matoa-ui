import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from '../src';

const meta: Meta = {
  title: 'Data/Badge',
  component: Badge,
  argTypes: {
    children: {
      defaultValue: '12',
    },
  },
};

export default meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {};
