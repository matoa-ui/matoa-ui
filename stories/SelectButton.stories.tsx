import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SelectButton, SelectButtonProps } from '../src';

const meta: Meta = {
  title: 'Forms/SelectButton',
  component: SelectButton,
  argTypes: {
    data: {
      defaultValue: [
        {
          key: '0',
          content: (
            <span>
              <b>Hi</b>
            </span>
          ),
        },
        {
          key: '1',
          content: (
            <span>
              <i>Ho</i>
            </span>
          ),
        },
        {
          key: '2',
          content: <span style={{ color: 'red' }}>Hello</span>,
        },
      ],
    },
    defaultValue: {
      defaultValue: 'Select one',
    },
  },
};

export default meta;

const Template: Story<SelectButtonProps> = args => <SelectButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
