import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Anchor, AnchorProps } from '../src';

const meta: Meta = {
  title: 'Basic/Anchor',
  component: Anchor,
  argTypes: {
    href: {
      defaultValue: 'https://google.com',
    },
    target: {
      defaultValue: '_blank',
    },
    children: {
      defaultValue: 'Google',
    },
  },
};

export default meta;

const Template: Story<AnchorProps> = args => <Anchor {...args} />;

export const Default = Template.bind({});

Default.args = {};
