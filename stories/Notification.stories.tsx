import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Notification, NotificationProps } from '../src';

const meta: Meta = {
  title: 'Notification',
  component: Notification,
};

export default meta;

const Template: Story<NotificationProps> = args => (
  <>
    <Notification title="None">Neutral notification.</Notification>

    <Notification title="Info" type="info">
      Shows information.
    </Notification>

    <Notification title="Success" type="success">
      Reports success.
    </Notification>

    <Notification title="Error" type="error">
      Reports failure.
    </Notification>

    <Notification title="Warning" type="warning">
      Displays warning.
    </Notification>
  </>
);

export const Default = Template.bind({});

Default.args = {};
