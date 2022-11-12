import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ColorPicker, ColorPickerProps } from '../src';

const meta: Meta = {
  title: 'Forms/ColorPicker',
  component: ColorPicker,
  argTypes: {
    defaultValue: {
      defaultValue: { r: 133, g: 183, b: 221 },
    },
    hideBar: {
      defaultValue: false,
    },
  },
};

export default meta;

const Template: Story<ColorPickerProps> = args => <ColorPicker {...args} />;

export const Default = Template.bind({});

Default.args = {};
