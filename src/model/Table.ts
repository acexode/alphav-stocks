export interface TableProps {
  entries: Array<{
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    change: number;
  }>;
}

export interface TableRowProps {
  data: {
    date: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    change: number;
  };
}
