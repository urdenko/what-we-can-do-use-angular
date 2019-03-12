import { Component } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { first } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { ISearchItem } from "../../models/search-result.model";

@Component({
  selector: "app-ngxs",
  template: `
    <input [formControl]="inputControl" />
    <button (click)="onSearch()">Поиск</button>
    <div *ngFor="let item of searchItems" class="list-item">{{ item.title }}</div>
  `,
  styles: []
})
export class NgxsComponent {
  constructor(private api: ApiService) {}

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
}
