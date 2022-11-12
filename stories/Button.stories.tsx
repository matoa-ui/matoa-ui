import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src';

const meta: Meta = {
  title: 'Basic/Button',
  component: Button,
  argTypes: {
    href: {
      defaultValue: '#🍕',
    },
    children: {
        defaultValue: 'Click me',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {};
