import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flyout, FlyoutProps, Tag } from '../src';

const meta: Meta = {
  title: 'Flyout',
  component: Flyout,
};

export default meta;

const Template: Story<FlyoutProps> = args => (
  <div
    style={{
      width: '100%',
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <Flyout position={'right'} content="Right">
      <Tag type="primary">Element</Tag>
    </Flyout>

    <Flyout position={'top'} content="Top">
      <Tag type="info">Element</Tag>
    </Flyout>

    <Flyout position={'bottom'} content="Bottom">
      <Tag type="secondary">Element</Tag>
    </Flyout>

    <Flyout position={'left'} content="Left">
      <Tag type="danger">Element</Tag>
    </Flyout>
  </div>
);

export const Default = Template.bind({});

Default.args = {};
