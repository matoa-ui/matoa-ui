import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tag, TagProps } from '../src';

const meta: Meta = {
  title: 'Tag',
  component: Tag,
};

export default meta;

const Template: Story<TagProps> = args => (
  <>
    <Tag type="primary">Alpha</Tag> <Tag type="danger">Beta</Tag>{' '}
    <Tag type="info">Gamma</Tag> <Tag type="secondary">Example</Tag>{' '}
    <Tag type="success">TypeScript</Tag> <Tag type="warning">React</Tag>{' '}
    <Tag type="none">Angular</Tag> <Tag type="disabled">Vue</Tag>
  </>
);

export const Default = Template.bind({});

Default.args = {};
