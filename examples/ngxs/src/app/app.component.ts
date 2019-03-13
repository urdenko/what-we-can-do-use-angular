import { Component } from "@angular/core";
import { ISearchResult } from "./models/search-result.model";
import { ApiService } from "./services/api.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-root",
  template: `
    <app-search></app-search>
    <app-favorites></app-favorites>
    <app-content></app-content>
  `,
  styles: []
})
export class AppComponent {}
