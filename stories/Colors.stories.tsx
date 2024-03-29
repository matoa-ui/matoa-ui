import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  notify,
  Notifications,
  MetroInfoTile,
  StackPanel,
  StackPanelDirection,
  invertColor,
  clipboardCopy,
  colors,
} from '../src';

const meta: Meta = {
  title: 'Basic/Colors',
};

export default meta;

const namedColors = Object.keys(colors.all);

const ColorTile = ({ colorName, color }) =>
  typeof color === 'string' ? (
    <MetroInfoTile
      title={
        <span>
          <span style={{ fontSize: '1.3em' }}>{colorName}</span>
          <br />
          <span style={{ fontSize: '0.8em' }}>{color}</span>
        </span>
      }
      onClick={() => {
        clipboardCopy(color);
        notify({
          content: `Copied ${color} to clipboard!`,
          options: {
            autoClose: 1000,
            position: 'top-right',
            title: 'Done',
            type: 'info',
          },
        });
      }}
      theme={{
        metroInfoTile: {
          background: color,
          textColor: invertColor(color, true),
          size: '132px',
        },
      }}
    />
  ) : null;

const Template: Story = _ => (
  <>
    <Notifications />
    <StackPanel wrap direction={StackPanelDirection.leftToRight}>
      {namedColors.map(colorName => (
        <ColorTile
          key={colorName}
          colorName={colorName}
          color={colors[colorName]}
        />
      ))}
    </StackPanel>
  </>
);

export const Default = Template.bind({});

Default.args = {};
