import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AutocompleteTagBuilder, AutocompleteTagBuilderProps } from '../src';

const meta: Meta = {
  title: 'AutocompleteTagBuilder',
  component: AutocompleteTagBuilder,
  argTypes: {
    suggestions: {
      defaultValue: ['one', 'two', 'three', 'four'],
    },
  },
};

export default meta;

const Template: Story<AutocompleteTagBuilderProps> = args => <AutocompleteTagBuilder {...args}/>;

export const Default = Template.bind({});

Default.args = {};
