import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Image, ImageProps } from '../src';

const meta: Meta = {
  title: 'Image',
  component: Image,
  argTypes: {
    preload: {
      defaultValue: true,
    },
    src: {
      defaultValue: 'https://picsum.photos/seed/picsum/961/384',
    },
    alt: {
      defaultValue: 'image',
    },
  },
};

export default meta;

const Template: Story<ImageProps> = args => <Image {...args} />;

export const Default = Template.bind({});

Default.args = {};
