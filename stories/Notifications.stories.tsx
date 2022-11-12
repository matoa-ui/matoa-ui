import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Notifications,
  NotificationsProps,
  Button,
  notify,
} from '../src';

const meta: Meta = {
  title: 'Notice/Notifications',
  component: Notifications,
};

export default meta;

const Template: Story<NotificationsProps> = args => (
  <>
    <Notifications {...args} />
    <Button
      onClick={() =>
        notify.error({
          content: 'Laborum deserunt ad ipsum exercitation.',
          options: { position: 'bottom-left' },
        })
      }
    >
      Error notification
    </Button>
    <Button
      onClick={() =>
        notify.success({
          content: 'Elit ex culpa elit laborum anim.',
          options: { position: 'bottom-left' },
        })
      }
    >
      Success notification
    </Button>
  </>
);

export const Default = Template.bind({});

Default.args = {};
