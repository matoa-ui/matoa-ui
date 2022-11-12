import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from '../src';

const meta: Meta = {
  title: 'Data/Table',
  component: Table,
  argTypes: {
    data: {
      defaultValue: [
        {
          name: 'A',
          age: 21,
        },
        {
          name: 'B',
          age: 12,
        },
        {
          name: 'C',
          age: 25,
        },
        {
          name: 'D',
          age: 15,
        },
      ],
    },
  },
};

export default meta;

const Template: Story<TableProps> = args => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {};
