import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Slider, SliderProps } from '../src';

const meta: Meta = {
  title: 'Slider',
  component: Slider,
};

export default meta;

const Template: Story<SliderProps> = args => <Slider {...args} />;

export const Default = Template.bind({});

Default.args = {};
