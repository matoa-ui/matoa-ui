import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Grid, GridArea, GridAreaProps } from '../src';

const meta: Meta = {
  title: 'GridArea',
  component: GridArea,
};

export default meta;

const Template: Story<GridAreaProps> = args => <div style={{ height: '200px' }}>
<Grid rows={['100px', '1fr', '50px']} columns={['10em', '1fr']}>
  <GridArea column={0} row={0} colSpan={2} style={{ background: 'red' }}>Header</GridArea>
  <GridArea column={0} row={1} style={{ background: 'blue' }}>Menu</GridArea>
  <GridArea column={1} row={1} style={{ background: 'yellow' }}>Content</GridArea>
  <GridArea column={0} row={2} colSpan={2} style={{ background: 'red' }}>Footer</GridArea>
</Grid>
</div>;

export const Default = Template.bind({});

Default.args = {};
