import { Component } from "@angular/core";
import { ISearchItem } from "../models/search-result.model";
import { NgxsState } from "../stores/ngxs/ngxs.state";
import { DeleteFavorite, LoadContent, ClearContent, SelectId } from "../stores/ngxs/ngxs.actions";
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-favorites",
  template: `
    Закладки: {{ (favorites$ | async).length }}
    <div
      *ngFor="let item of (favorites$ | async)"
      class="list-item"
      [class.selected]="(selectId$ | async) === item.pageid"
      [class.loaded]="loadId === item.pageid"
    >
      {{ item.title }}
      <i (click)="loadContent(item)" class="fa fa-book"></i>
      <i (click)="deleteFavorite(item)" class="fa fa-trash"></i>
    </div>
  `
})
export class FavoritesComponent {
  @Select(NgxsState.favorites)
  favorites$: Observable<ISearchItem[]>;

  @Select(NgxsState.selectId)
  selectId$: Observable<number>;

  loadId: number;

  constructor(private store: Store) {}

  loadContent(item: ISearchItem): void {
    this.store.dispatch([ClearContent, new LoadContent(item.pageid)]).subscribe(
      () => {
        this.loadId = item.pageid;
      },
      () => {
        this.store.dispatch(new SelectId(null));
      }
    );
  }

  deleteFavorite(item: ISearchItem): void {
    this.store.dispatch(new DeleteFavorite(item));
  }
}
