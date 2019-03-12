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

export interface IParsePage {
  parse: {
    text: { "*": string };
    title: string;
  };
}
