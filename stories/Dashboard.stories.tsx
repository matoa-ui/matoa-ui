import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dashboard, DashboardProps } from '../src';

const meta: Meta = {
  title: 'Dashboard',
  component: Dashboard,
  argTypes: {
    defaultTiles: {
      defaultValue: [
        { id: '1' },
        { id: '2', colSpan: 2 },
        { id: '3', rowSpan: 2 },
        { id: '4', colSpan: 2, hidden: true },
      ],
    },
    rowHeight: {
      defaultValue: 150,
    },
  },
};

export default meta;

const style = {
  height: '100%',
  width: '100%',
  background: '#ccc',
};

const Template: Story<DashboardProps> = args => (
  <Dashboard {...args}>
    <div style={style}>First</div>
    <div style={style}>Second</div>
    <div style={style}>Third</div>
    <div style={style}>Fourth</div>
  </Dashboard>
);

export const Default = Template.bind({});

Default.args = {};
