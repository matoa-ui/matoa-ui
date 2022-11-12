import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  StepIndicator,
  StepIndicatorProps,
  StepIndicatorStep,
} from '../src';

const meta: Meta = {
  title: 'Navigation/StepIndicator',
  component: StepIndicator,
  argTypes: {
    current: {
      defaultValue: 1,
    },
  },
};

export default meta;

const Template: Story<StepIndicatorProps> = args => (
  <StepIndicator {...args}>
    <StepIndicatorStep header="1. First" />
    <StepIndicatorStep header="2. Second">
      Second step content.
    </StepIndicatorStep>
    <StepIndicatorStep header="Third">Third step content.</StepIndicatorStep>
    <StepIndicatorStep header="Fourth" />
    <StepIndicatorStep header="Fifth" />
  </StepIndicator>
);

export const Default = Template.bind({});

Default.args = {};
