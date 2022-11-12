import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionTab, AccordionProps } from '../src';

const meta: Meta = {
  title: 'Accordion',
  component: Accordion,
};

export default meta;

const Template: Story<AccordionProps> = args => (
  <Accordion {...args}>
    <AccordionTab header="One">First tab</AccordionTab>
    <AccordionTab header="Two">Second tab</AccordionTab>
    <AccordionTab header="Three">Third tab</AccordionTab>
  </Accordion>
);

export const Default = Template.bind({});

Default.args = {};
