import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OverflowMenu, OverflowMenuProps, IconLink } from '../src';

const meta: Meta = {
  title: 'Navigation/OverflowMenu',
  component: OverflowMenu,
  argTypes: {
    button: {
      defaultValue: <IconLink icon="MoreVert" />,
    },
    items: {
      defaultValue: ['First', 'Second', 'Third'],
    },
  },
};

export default meta;

const Template: Story<OverflowMenuProps> = args => <OverflowMenu {...args} />;

export const Default = Template.bind({});

Default.args = {};
