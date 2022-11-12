import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Breadcrumbs, Breadcrumb, BreadcrumbsProps } from '../src';

const meta: Meta = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    size: {
      defaultValue: 3,
    },
  },
};

export default meta;

const Template: Story<BreadcrumbsProps> = args => (
  <Breadcrumbs {...args}>
    <Breadcrumb title="Breadcrumb 1" to="/breadcrumb/1" />
    <Breadcrumb title="Breadcrumb 2" to="/2" />
    <Breadcrumb title="Breadcrumb 3" to="/3" />
    <Breadcrumb title="Breadcrumb 4" to="/4" />
    <Breadcrumb title="Breadcrumb 5" to="/5" />
  </Breadcrumbs>
);

export const Default = Template.bind({});

Default.args = {};
