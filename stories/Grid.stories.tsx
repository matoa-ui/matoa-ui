import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, GridProps } from '../src';

const meta: Meta = {
  title: 'Basic/Grid',
  component: Grid,
  argTypes: {
    rows: {
      defaultValue: 2,
    },
    columns: {
      defaultValue: 2,
    },
  },
};

export default meta;

const Template: Story<GridProps> = args => (
  <Grid {...args}>
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
  </Grid>
);

export const Default = Template.bind({});

Default.args = {};
