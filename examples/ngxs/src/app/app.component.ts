import { Component } from "@angular/core";
import { ISearchResult } from "./models/search-result.model";
import { ApiService } from "./services/api.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-root",
  template: `
    <app-ngxs-search></app-ngxs-search>
    <app-ngxs-favorites></app-ngxs-favorites>
    <app-ngxs-content></app-ngxs-content>
  `,
  styles: []
})
export class AppComponent {}
