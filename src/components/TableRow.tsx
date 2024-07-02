import React from 'react';
import { TableRowProps } from '../model/Table';

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <tr>
      <td className="border border-gray-200 px-4 py-2 text-center">{data.date}</td>
      <td className="border border-gray-200 px-4 py-2 text-center">{data.open}</td>
      <td className="border border-gray-200 px-4 py-2 text-center">{data.high}</td>
      <td className="border border-gray-200 px-4 py-2 text-center">{data.low}</td>
      <td className="border border-gray-200 px-4 py-2 text-center">{data.close}</td>
      <td className="border border-gray-200 px-4 py-2 text-center">{data.volume}</td>
      <td className={`border px-4 py-2 text-center ${data.change >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
        {data.change.toFixed(2)}%
      </td>
    </tr>
  );
};

export default TableRow;
