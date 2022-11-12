import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContentSwitch, ContentSwitchProps, TabPage } from '../src';

const meta: Meta = {
  title: 'ContentSwitch',
  component: ContentSwitch,
};

export default meta;

const Template: Story<ContentSwitchProps> = args => (
  <ContentSwitch {...args}>
    <TabPage header="First">First content.</TabPage>
    <TabPage header="Second">Second content.</TabPage>
    <TabPage header="Third">Third content.</TabPage>
    <TabPage header="Last">Final content.</TabPage>
  </ContentSwitch>
);

export const Default = Template.bind({});

Default.args = {};
