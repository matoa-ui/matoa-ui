import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Autocomplete, AutocompleteProps } from '../src';

const meta: Meta = {
  title: 'Forms/Autocomplete',
  component: Autocomplete,
  argTypes: {
    suggestions: {
      defaultValue: ['one', 'two', 'three'],
    },
    defaultValue: {
      defaultValue: 'five',
    },
  },
};

export default meta;

const Template: Story<AutocompleteProps> = args => <Autocomplete {...args} />;

export const Default = Template.bind({});

Default.args = {};
