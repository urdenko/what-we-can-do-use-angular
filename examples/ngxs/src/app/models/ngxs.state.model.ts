import { ISearchItem, IParsePage } from "./search-result.model";

export interface INgxsState {
  favorites: ISearchItem[];
  content: IParsePage;
  selectetId: number;
}
