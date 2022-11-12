import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchField, SearchFieldProps } from '../src';

const meta: Meta = {
  title: 'Forms/SearchField',
  component: SearchField,
  argTypes: {
    label: {
      defaultValue: 'Search',
    },
    onSearch: {
      defaultValue: value => console.log(value),
    },
  },
};

export default meta;

const Template: Story<SearchFieldProps> = args => <SearchField {...args} />;

export const Default = Template.bind({});

Default.args = {};
