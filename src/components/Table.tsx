import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Card from './Card';
import { TableProps } from '../model/Table';


const Table: React.FC<TableProps> = ({ entries }) => {
  return (
    <Card>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <TableHeader />
        <tbody>
          {entries.map(entry => (
            <TableRow key={entry.date} data={entry} />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
