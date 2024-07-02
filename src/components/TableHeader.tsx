import React from 'react';

const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th className="border border-gray-200 px-4 py-2">Date</th>
        <th className="border border-gray-200 px-4 py-2">Open</th>
        <th className="border border-gray-200 px-4 py-2">High</th>
        <th className="border border-gray-200 px-4 py-2">Low</th>
        <th className="border border-gray-200 px-4 py-2">Close</th>
        <th className="border border-gray-200 px-4 py-2">Volume</th>
        <th className="border border-gray-200 px-4 py-2">Change (%)</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
