export interface ISearchItem {
  title: string;
  pageid: number;
  snippet: string;
}

export interface ISearchResult {
  query: {
    search: ISearchItem[];
  };
}
