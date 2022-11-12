import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Skeleton, SkeletonProps } from '../src';

const meta: Meta = {
  title: 'Data/Skeleton',
  component: Skeleton,
};

export default meta;

const exampleWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
};

const skeletonWrapper = {
  flex: '1 1 100%',
  padding: '10px',
  overflow: 'hidden',
};

const Template: Story<SkeletonProps> = args => (
  <div style={exampleWrapper}>
    <div style={skeletonWrapper}>
      <Skeleton />
    </div>
    <div style={skeletonWrapper}>
      <Skeleton isPulsing={false} />
    </div>
  </div>
);

export const Default = Template.bind({});

Default.args = {};
