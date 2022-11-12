import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Headline, HeadlineProps } from '../src';

const meta: Meta = {
  title: 'Headline',
  component: Headline,
};

export default meta;

const Template: Story<HeadlineProps> = args => (
  <div>
    <Headline level={1}>h1 headline</Headline>
    <Headline level={2}>h2 headline</Headline>
    <Headline level={3}>h3 headline</Headline>
    <Headline level={4}>h4 headline</Headline>
    <Headline level={5}>h5 headline</Headline>
  </div>
);

export const Default = Template.bind({});

Default.args = {};
