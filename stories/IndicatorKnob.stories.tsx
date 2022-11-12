import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IndicatorKnob, IndicatorKnobProps } from '../src';

const meta: Meta = {
  title: 'Others/IndicatorKnob',
  component: IndicatorKnob,
};

export default meta;

const style = { position: 'relative', height: '30px' };

const Template: Story<IndicatorKnobProps> = args => (
  <table width="100%">
    <tbody>
      <tr>
        <td width="50%">Standard</td>
        <td width="50%" style={style}>
          <IndicatorKnob />
        </td>
      </tr>
      <tr>
        <td>Colored</td>
        <td style={style}>
          <IndicatorKnob color="red" />
        </td>
      </tr>
      <tr>
        <td>Shifted</td>
        <td style={style}>
          <IndicatorKnob x={0} />
        </td>
      </tr>
      <tr>
        <td>Active</td>
        <td style={style}>
          <IndicatorKnob active />
        </td>
      </tr>
      <tr>
        <td>Disabled</td>
        <td style={style}>
          <IndicatorKnob disabled />
        </td>
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});

Default.args = {};
