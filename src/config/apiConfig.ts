const API_KEY =  'RIBXT3XYLI69PC0Q'; // 'P40PPE3LVFURZ2VG'
const BASE_URL = 'https://www.alphavantage.co/query';

interface ApiConfig {
  apiKey: string;
  baseUrl: string;
  functionType: string;
}

const apiConfig: ApiConfig = {
  apiKey: API_KEY,
  baseUrl: BASE_URL,
  functionType: 'TIME_SERIES_DAILY',
};

export default apiConfig;
