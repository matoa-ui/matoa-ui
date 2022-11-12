import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BodyText, BodyTextProps } from '../src';

const meta: Meta = {
  title: 'Basic/BodyText',
  component: BodyText,
  argTypes: {
    children: {
      defaultValue: 'Et veniam culpa qui cillum excepteur minim. Culpa velit in sit esse sit aliqua velit consectetur aliqua non excepteur occaecat mollit. Aute reprehenderit velit aliquip adipisicing. Duis ut ad minim eu deserunt qui amet do fugiat minim officia. Cupidatat dolore ipsum tempor mollit labore officia nostrud cillum esse. Minim velit nisi enim tempor reprehenderit aliquip aute veniam qui. Elit sunt sit aute ex anim eiusmod adipisicing fugiat ad sunt nulla minim esse incididunt.',
    },
  },
};

export default meta;

const Template: Story<BodyTextProps> = args => <BodyText {...args} />;

export const Default = Template.bind({});

Default.args = {};
