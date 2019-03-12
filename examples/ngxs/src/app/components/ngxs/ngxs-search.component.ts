import { Component } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { first } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { ISearchItem } from "../../models/search-result.model";
import { Store } from "@ngxs/store";
import { AddFavorite } from "../../stores/ngxs/ngxs.actions";

@Component({
  selector: "app-ngxs-search",
  template: `
    <input [formControl]="inputControl" />
    <button (click)="onSearch()">Поиск</button>
    <div>Найдено: {{ searchItems.length }}</div>
    <div *ngFor="let item of searchItems" class="list-item">
      {{ item.title }}
      <i (click)="addFavorite(item)" class="fa fa-star"></i>
    </div>
  `
})
export class NgxsSearchComponent {
  constructor(private api: ApiService, private store: Store) {}

  inputControl = new FormControl("");

  searchItems: ISearchItem[] = [];

  onSearch(): void {
    const tag: string = this.inputControl.value;

    this.api
      .search(tag)
      .pipe(first())
      .subscribe(result => {
        this.searchItems = result.query.search;
      });
  }

  addFavorite(item: ISearchItem): void {
    this.store.dispatch(new AddFavorite(item));
  }
}
