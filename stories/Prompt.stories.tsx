import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Prompt, PromptProps } from '../src';

const meta: Meta = {
  title: 'Others/Prompt',
  component: Prompt,
  argTypes: {
    message: {
      defaultValue: 'Hey, are you sure you want to leave the page',
    },
    modalOptions: {
      defaultValue: { title: 'Leaving page...' },
    },
  },
};

export default meta;

const Template: Story<PromptProps> = args => (
  <>
    <p>
      Prompt component allows to show a dialog window if user is navigating away
      from a page. Usual use case for this is when user is about to leave the
      page with form that has changes without submitting it.
    </p>
    <Prompt {...args} />
  </>
);

export const Default = Template.bind({});

Default.args = {};
