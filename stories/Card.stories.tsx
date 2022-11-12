import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps, Image, CardBody, Button } from '../src';

const meta: Meta = {
  title: 'Others/Card',
  component: Card,
};

export default meta;

const Template: Story<CardProps> = args => (
  <Card {...args}>
    <Image src="https://picsum.photos/seed/picsum/961/384" alt="image" />
    <CardBody>
      <p>
        Consectetur veniam quis dolor ea nostrud irure amet. Dolor enim commodo
        aliquip eu. Ullamco sit ut magna velit eiusmod enim qui dolor labore
        reprehenderit. Et officia et adipisicing aliquip anim nostrud nisi ipsum
        proident esse irure aute Lorem voluptate. Nostrud ex enim cupidatat sit
        sint sint qui pariatur sint occaecat est.
      </p>
    </CardBody>
    <CardBody>
      <Button>Click me</Button>
    </CardBody>
  </Card>
);

export const Default = Template.bind({});

Default.args = {};
