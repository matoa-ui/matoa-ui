import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination, PaginationProps } from '../src';

const meta: Meta = {
  title: 'Data/Pagination',
  component: Pagination,
  argTypes: {
    size: {
      defaultValue: 2,
    },
  },
};

export default meta;

const Template: Story<PaginationProps> = args => (
  <Pagination {...args}>
    <div>First</div>
    <div>Second</div>
    <div>Third</div>
    <div>Fourth</div>
    <div>Fifth</div>
  </Pagination>
);

export const Default = Template.bind({});

Default.args = {};
