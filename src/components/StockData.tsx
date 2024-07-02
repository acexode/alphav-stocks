import React from 'react';
import { useAlphaVantage } from '../hooks/useAlphaVantage';
import Table from './Table';
import MetaDataDisplay from './MetaDataCard';
import MessageCard from './MessageCard';


interface StockDataProps {
  symbol: string;
}

const StockData: React.FC<StockDataProps> = ({ symbol }) => {
  const { data, loading, error } = useAlphaVantage(symbol);

  if (loading) return <MessageCard message="Loading..." isLoading={true} />;
  if (error) return <MessageCard message={`Error: ${error}`} isError={true} />;
  if (!data || !data['Time Series (Daily)']) return <MessageCard message={ data?.Information || "No data available"} />;

  const metaData = {
    information: data["Meta Data"]["1. Information"],
    symbol: data["Meta Data"]["2. Symbol"],
    lastRefreshed: data["Meta Data"]["3. Last Refreshed"],
    outputSize: data["Meta Data"]["4. Output Size"],
    timeZone: data["Meta Data"]["5. Time Zone"],
  };

  const entries = Object.entries(data['Time Series (Daily)']).map(([date, values]) => {
    const open = parseFloat(values['1. open']);
    const close = parseFloat(values['4. close']);
    const change = ((close - open) / open) * 100;
    return {
      date,
      open: values['1. open'],
      high: values['2. high'],
      low: values['3. low'],
      close: values['4. close'],
      volume: values['5. volume'],
      change,
    };
  });

  return (
    <div>
      <MetaDataDisplay metaData={metaData} />
      <Table entries={entries} />
    </div>
  );
};

export default StockData;
