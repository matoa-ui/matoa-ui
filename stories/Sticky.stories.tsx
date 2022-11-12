import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sticky, StickyProps, Container, Button } from '../src';

const meta: Meta = {
  title: 'Others/Sticky',
  component: Sticky,
  argTypes: {
    href: {
      defaultValue: 'left',
    },
  },
};

export default meta;

const Template: Story<StickyProps> = args => (
  <Container style={{ position: 'relative', minHeight: '120px' }}>
    <Sticky {...args}>
      <Button>Click me</Button>
    </Sticky>
  </Container>
);

export const Default = Template.bind({});

Default.args = {};
