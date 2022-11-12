import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from '../src';

const meta: Meta = {
  title: 'Data/ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: {
      defaultValue: 50,
    },
  },
};

export default meta;

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
