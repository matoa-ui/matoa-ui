import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DropdownField, DropdownFieldProps } from '../src';

const meta: Meta = {
  title: 'DropdownField',
  component: DropdownField,
  argTypes: {
    data: {
      defaultValue: ['first', 'second'],
    },
    direction: {
      defaultValue: 0,
    },
    label: {
      defaultValue: 'Select item',
    },
  },
};

export default meta;

const Template: Story<DropdownFieldProps> = args => <DropdownField {...args} />;

export const Default = Template.bind({});

Default.args = {};
