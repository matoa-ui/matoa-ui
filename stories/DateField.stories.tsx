import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DateField, DateFieldProps } from '../src';

const meta: Meta = {
  title: 'DateField',
  component: DateField,
};

export default meta;

const Template: Story<DateFieldProps> = args => (
  <DateField onChange={e => console.log(e)} {...args} />
);

export const Default = Template.bind({});

Default.args = {};
