import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Label, LabelProps } from '../src';

const meta: Meta = {
  title: 'Data/Label',
  component: Label,
  argTypes: {
    children: {
      defaultValue: 'First Name:',
    },
  },
};

export default meta;

const Template: Story<LabelProps> = args => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {};
