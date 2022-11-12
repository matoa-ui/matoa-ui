import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps, IconNames } from '../src';

const meta: Meta = {
  title: 'Icon',
  component: Icon,
};

export default meta;

const names = IconNames.slice(0).sort();

const Template: Story<IconProps> = args => (
  <div style={{ columnWidth: '180px' }}>
    {names.map(name => (
      <div key={name}>
        <Icon name={name} /> <span>{name}</span>
      </div>
    ))}
  </div>
);

export const Default = Template.bind({});

Default.args = {};
