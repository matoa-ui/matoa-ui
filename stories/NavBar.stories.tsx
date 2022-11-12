import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavBar, NavBarProps } from '../src';
import Logo from '../assets/logo.jpg';

const meta: Meta = {
  title: 'NavBar',
  component: NavBar,
  argTypes: {
    items: {
      defaultValue: [
        {
          id: '1',
          content: <a href="#">First</a>,
        },
        {
          id: '2',
          content: <a href="#">Second</a>,
        },
        {
          id: '3',
          content: <a href="#">Third</a>,
        },
      ],
    },
    logo: {
      defaultValue: Logo,
    },
    mode: {
      defaultValue: 'hamburger',
    },
  },
};

export default meta;

const Template: Story<NavBarProps> = args => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
