import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps, Button, TextField } from '../src';

const meta: Meta = {
  title: 'Forms/Form',
  component: Form,
  argTypes: {
    onSubmit: {
      defaultValue: e => alert(JSON.stringify(e)),
    },
    validationRules: {
      defaultValue: {
        first: value =>
          value && value.length > 10 ? 'Should be less than 10' : undefined,
        last: () => 'Always some error',
      },
    },
  },
};

export default meta;

const Template: Story<FormProps> = args => (
  <Form {...args}>
    <div>First:</div>
    <div>
      <TextField name="first" />
    </div>
    <div>Last:</div>
    <div>
      <TextField name="last" />
    </div>
    <div>
      <Button>Submit</Button>
    </div>
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
