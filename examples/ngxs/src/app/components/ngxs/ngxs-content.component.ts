import { Component, OnInit } from "@angular/core";
import { IParsePage } from "../../models/search-result.model";
import { NgxsState } from "../../stores/ngxs/ngxs.state";
import { Select, Actions, ofActionDispatched, ofActionCompleted, ofActionErrored } from "@ngxs/store";
import { Observable } from "rxjs";
import { LoadContent } from "../../stores/ngxs/ngxs.actions";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-ngxs-content",
  template: `
    <div *ngIf="inProgress">Загрузка контента...</div>
    <div *ngIf="errorString">{{ errorString }}</div>
    <ng-template let-content [ngIf]="content$ | async">
      <h1>{{ content.parse.title }}</h1>
      <div [innerHTML]="content.parse.text['*']"></div>
    </ng-template>
  `
})
export class NgxsContentComponent implements OnInit {
  @Select(NgxsState.content)
  content$: Observable<IParsePage>;

  inProgress = false;
  errorString: string;

  constructor(private actions$: Actions) {}

  ngOnInit(): void {
    this.actions$.pipe(ofActionDispatched(LoadContent)).subscribe(() => {
      this.inProgress = true;
      this.errorString = null;
    });

    this.actions$.pipe(ofActionCompleted(LoadContent)).subscribe(() => {
      this.inProgress = false;
    });

    this.actions$.pipe(ofActionErrored(LoadContent)).subscribe((error: HttpErrorResponse) => {
      this.errorString = `Ошибка загрузки контента: ${error.message}`;
    });
  }
}
