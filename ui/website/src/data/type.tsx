export interface ToolDataList {
  type: string;
  hide: number;
  list: ToolDataItem[];
}

export interface ToolDataItem {
  id: number;
  name: string;
  url: string;
  desc: string;
  logo: string;
}
