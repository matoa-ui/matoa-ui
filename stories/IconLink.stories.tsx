import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconLink, IconLinkProps } from '../src';

const meta: Meta = {
  title: 'IconLink',
  component: IconLink,
  argTypes: {
    icon: {
      defaultValue: 'Favorite',
    },
    onClick: {
      defaultValue: () => alert('Saved!'),
    },
    children: {
      defaultValue: 'Save to favorites',
    },
  },
};

export default meta;

const Template: Story<IconLinkProps> = args => <IconLink {...args} />;

export const Default = Template.bind({});

Default.args = {};
