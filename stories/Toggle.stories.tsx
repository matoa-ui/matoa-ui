import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toggle, ToggleProps } from '../src';

const meta: Meta = {
  title: 'Forms/Toggle',
  component: Toggle,
};

export default meta;

const Template: Story<ToggleProps> = args => <Toggle {...args} />;

export const Default = Template.bind({});

Default.args = {};
