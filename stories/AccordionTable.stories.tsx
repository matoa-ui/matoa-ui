import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AccordionTable, AccordionTableProps, Tag } from '../src';

const meta: Meta = {
  title: 'Others/AccordionTable',
  component: AccordionTable,
  argTypes: {
    indexed: {
      defaultValue: true,
    },
    data: {
      defaultValue: [
        { tag: 'A', value: 'Alpha', team: 'Alpha team' },
        { tag: 'B', value: 'Bravo', team: 'Bravo team' },
        { tag: 'C', value: 'Charlie', team: 'Charlie team' },
        { tag: 'E', value: 'Echo', team: 'Echo team' },
      ],
    },
    columns: {
      defaultValue: {
        tag: 'Tag',
        value: 'Value',
        team: 'Team',
      },
    },
    cellRenderer: {
      defaultValue: cellRenderer,
    },
    detailsRenderer: {
      defaultValue: getContent,
    },
  },
};

export default meta;

const style = { width: '200px', margin: '0 auto', textAlign: 'center' };

const cardRenderer = ({ index, open, keys, item }) => (
  <div style={{ backgroundColor: 'green' }}>
    {index +
      ' ' +
      open +
      ' ' +
      keys.reduce((acc, item) => acc + item + ', ', '') +
      ' ' +
      item}
  </div>
);

function getContent({ index, data }) {
  return (
    <div style={style}>
      Details for row #<b>{index}</b>
    </div>
  );
}

function cellRenderer({ key, value }) {
  return key === 'tag' ? <Tag>{value}</Tag> : value;
}

const Template: Story<AccordionTableProps> = args => (
  <AccordionTable {...args} />
);

export const Default = Template.bind({});

Default.args = {};
