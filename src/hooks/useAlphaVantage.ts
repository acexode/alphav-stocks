import { useState, useEffect } from 'react';
import { ApiResponse } from '../model/ApiResponse';
import apiConfig from '../config/apiConfig';

export const useAlphaVantage = (symbol: string) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `${apiConfig.baseUrl}?function=${apiConfig.functionType}&symbol=${symbol}&apikey=${apiConfig.apiKey}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  return { data, loading, error };
};
