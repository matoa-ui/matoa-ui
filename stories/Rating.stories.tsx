import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Rating, RatingProps } from '../src';

const meta: Meta = {
  title: 'Forms/Rating',
  component: Rating,
};

export default meta;

const Template: Story<RatingProps> = args => <Rating {...args} />;

export const Default = Template.bind({});

Default.args = {};
