import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Carousel, CarouselProps } from '../src';

const meta: Meta = {
  title: 'Others/Carousel',
  component: Carousel,
  argTypes: {
    infinite: {
      defaultValue: true,
    },
    arrows: {
      defaultValue: true,
    },
  },
};

export default meta;

const Template: Story<CarouselProps> = args => (
  <Carousel {...args}>
    <div
      style={{
        height: '150px',
        width: '100%',
        backgroundColor: '#f3a',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      First page
    </div>
    <div
      style={{
        height: '200px',
        width: '90%',
        backgroundColor: '#43c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Second page
    </div>
    <div
      style={{
        height: '150px',
        width: '450px',
        backgroundColor: '#1f2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      Third page
    </div>
  </Carousel>
);

export const Default = Template.bind({});

Default.args = {};
