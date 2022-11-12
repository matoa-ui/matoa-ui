import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PaginationBar, PaginationBarProps } from '../src';

const meta: Meta = {
  title: 'PaginationBar',
  component: PaginationBar,
  argTypes: {
    selectedPage: {
      defaultValue: 1,
    },
    size: {
      defaultValue: 10,
    },
    items: {
      defaultValue: 17,
    },
    availableSizes: {
      defaultValue: [5, 10, 15],
    },
  },
};

export default meta;

const Template: Story<PaginationBarProps> = args => <PaginationBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
