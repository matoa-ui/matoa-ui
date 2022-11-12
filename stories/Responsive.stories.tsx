import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Responsive, ResponsiveProps } from '../src';

const meta: Meta = {
  title: 'Responsive',
  component: Responsive,
};

export default meta;

const Template: Story<ResponsiveProps> = args => (
  <>
    <Responsive
      render={screenSize => (
        <p>
          This is the screen size: <b>{screenSize}</b>
        </p>
      )}
    />
    <Responsive screenSize="small">
      <p>This will render on small screens.</p>
    </Responsive>
    <Responsive screenSize="medium">
      <p>This will render on medium screens.</p>
    </Responsive>
    <Responsive screenSize="large">
      <p>This will render on large screens 1.</p>
      <p>This will render on large screens 2.</p>
    </Responsive>
    <Responsive screenSize="xLarge">
      <p>This will render on xLarge screens.</p>
    </Responsive>
    <Responsive screenSize="max">
      <p>This will render on max screens.</p>
    </Responsive>
    <Responsive
      screenSize="medium"
      theme={{ breakpoints: { medium: 200, large: 500 } }}
    >
      <p>This will render on medium screens with custom breakpoints.</p>
    </Responsive>
    <Responsive screenSize="large" screenSizeCondition="from">
      <p>This will render on large screens and wider.</p>
    </Responsive>
    <Responsive screenSize="large" screenSizeCondition="upTo">
      <p>This will render on large screens and narrower.</p>
    </Responsive>
  </>
);

export const Default = Template.bind({});

Default.args = {};
