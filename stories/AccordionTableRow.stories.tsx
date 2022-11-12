import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  AccordionTable,
  AccordionTableRow,
  AccordionTableProps,
} from '../src';

const meta: Meta = {
  title: 'Others/AccordionTableRow',
  component: AccordionTableRow,
};

export default meta;

const columns = {
  key: { header: 'Key', sortable: true },
  val: { header: 'Value', sortable: true },
};

const rowRenderer = ({ cells, handleClick, active }) => (
  <AccordionTableRow onClick={handleClick} active={active}>
    {cells}
  </AccordionTableRow>
);

function getData(num) {
  return Array.from(new Array(num), (el, ind) => ({
    key: `Key #${ind}`,
    val: ind,
  }));
}

function getContent({ index, data }) {
  return (
    <div>
      Details for row #<b>{index}</b>
    </div>
  );
}

const Template: Story<AccordionTableProps> = args => (
  <AccordionTable
    noHeader
    columns={columns}
    data={getData(1)}
    rowRenderer={rowRenderer}
    detailsRenderer={getContent}
  />
);

export const Default = Template.bind({});

Default.args = {};
