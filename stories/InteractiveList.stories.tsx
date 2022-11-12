import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InteractiveList, InteractiveListProps } from '../src';

const meta: Meta = {
  title: 'Data/InteractiveList',
  component: InteractiveList,
  argTypes: {
    data: {
      defaultValue: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4 has very long text inside. It will break in two lines. Item 4 has very long text inside. It will break in two lines. Item 4 has very long text inside. It will break in two lines.',
      ],
    },
    open: {
      defaultValue: true,
    },
  },
};

export default meta;

const Template: Story<InteractiveListProps> = args => (
  <InteractiveList {...args} />
);

export const Default = Template.bind({});

Default.args = {};
