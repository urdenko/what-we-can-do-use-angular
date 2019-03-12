import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { AppComponent } from "./app.component";
import { NgxsSearchComponent } from "./components/ngxs/ngxs-search.component";
import { NgxsFavoritesComponent } from "./components/ngxs/ngxs-favorites.component";
import { NgxsContentComponent } from "./components/ngxs/ngxs-content.component";
import { NgxsState } from "./stores/ngxs/ngxs.state";

@NgModule({
  declarations: [AppComponent, NgxsSearchComponent, NgxsFavoritesComponent, NgxsContentComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgxsModule.forRoot([NgxsState])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
