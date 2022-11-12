import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Highlight, HighlightProps } from '../src';

const meta: Meta = {
  title: 'Others/Highlight',
  component: Highlight,
  argTypes: {
    text: {
      defaultValue: 'Hello World! Searching for World!',
    },
    highlight: {
      defaultValue: 'World',
    },
    ignoreCase: {
      defaultValue: false,
    },
  },
};

export default meta;

const Template: Story<HighlightProps> = args => <Highlight {...args} />;

export const Default = Template.bind({});

Default.args = {};
