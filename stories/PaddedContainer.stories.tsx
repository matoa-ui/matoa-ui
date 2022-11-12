import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PaddedContainer, PaddedContainerProps } from '../src';

const meta: Meta = {
  title: 'Others/PaddedContainer',
  component: PaddedContainer,
  argTypes: {
    gutter: {
      defaultValue: 'large',
    },
    children: {
      defaultValue: 'Some content',
    },
  },
};

export default meta;

const Template: Story<PaddedContainerProps> = args => (
  <PaddedContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {};
