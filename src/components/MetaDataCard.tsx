import React from 'react';
import Card from './Card';
import { MetaDataProps } from '../model/MetaDataProps';



const MetaDataDisplay: React.FC<MetaDataProps> = ({ metaData }) => {
  return (
    <Card>
      <h2 className="text-lg font-sans font-bold mb-2">Stock Information for {metaData.symbol}</h2>
      <p><strong>Information:</strong> {metaData.information}</p>
      <p><strong>Last Refreshed:</strong> {metaData.lastRefreshed}</p>
      <p><strong>Output Size:</strong> {metaData.outputSize}</p>
      <p><strong>Time Zone:</strong> {metaData.timeZone}</p>
    </Card>
  );
};

export default MetaDataDisplay;
