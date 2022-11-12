import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageHead, PageHeadProps } from '../src';

const meta: Meta = {
  title: 'PageHead',
  component: PageHead,
  argTypes: {
    title: {
      defaultValue: 'Sample Page',
    },
    breadcrumbs: {
      defaultValue: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'Away',
          to: '/away',
        },
      ],
    },
    help: {
      defaultValue: 'More infos',
    },
    onHelp: {
      defaultValue: () => alert('Hi there'),
    },
  },
};

export default meta;

const Template: Story<PageHeadProps> = args => <PageHead {...args} />;

export const Default = Template.bind({});

Default.args = {};
