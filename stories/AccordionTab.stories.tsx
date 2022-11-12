import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionTab, AccordionTabProps } from '../src';

const meta: Meta = {
  title: 'AccordionTab',
  component: AccordionTab,
  argTypes: {
    header: {
      defaultValue: 'Title of the tab',
    },
  },
};

export default meta;

const Template: Story<AccordionTabProps> = args => (
  <Accordion>
    <AccordionTab {...args}>
      <em>Content of the tab</em>
    </AccordionTab>
  </Accordion>
);

export const Default = Template.bind({});

Default.args = {};
