import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner, SpinnerProps } from '../src';

const meta: Meta = {
  title: 'Spinner',
  component: Spinner,
};

export default meta;

const Template: Story<SpinnerProps> = args => (
  <table>
    <tbody>
      <tr>
        <td width="80" align="center">
          XL
        </td>
        <td width="80" align="center">
          L
        </td>
        <td width="80" align="center">
          M
        </td>
        <td width="80" align="center">
          S
        </td>
        <td width="80" align="center">
          XS
        </td>
      </tr>
      <tr>
        <td>
          <Spinner size="x-large" />
        </td>
        <td>
          <Spinner size="large" />
        </td>
        <td>
          <Spinner size="medium" />
        </td>
        <td>
          <Spinner size="small" />
        </td>
        <td>
          <Spinner size="x-small" />
        </td>
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});

Default.args = {};
