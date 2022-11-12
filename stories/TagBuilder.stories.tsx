import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TagBuilder, TagBuilderProps } from '../src';

const meta: Meta = {
  title: 'TagBuilder',
  component: TagBuilder,
};

export default meta;

const Template: Story<TagBuilderProps> = args => <TagBuilder {...args} />;

export const Default = Template.bind({});

Default.args = {};
