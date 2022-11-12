import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  InfiniteScroll,
  InfiniteScrollProps,
  Button,
  ListItem,
  ProgressBar,
} from '../src';

const meta: Meta = {
  title: 'InfiniteScroll',
  component: InfiniteScroll,
};

export default meta;

const Template: Story<InfiniteScrollProps> = args => {
  const [data, setData] = useState(getData());
  function getData() {
    return Array.apply(null, { length: 50 }).map((_, index) => (
      <ListItem key={Math.random() * 1000}>{index}</ListItem>
    ));
  }

  function loadItems(offset) {
    setTimeout(() => {
      setData([...data, ...getData()]);
    }, 1000);
  }

  return (
    <InfiniteScroll
      loadingIndicator={<ProgressBar animate="spinning" />}
      loadItems={loadItems}
      data={data}
      containerHeight={600}
      hasMore
      button={({ onClick }) => <Button onClick={onClick}>more</Button>}
    />
  );
};

export const Default = Template.bind({});

Default.args = {};
