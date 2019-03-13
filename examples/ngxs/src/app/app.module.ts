import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search.component";
import { FavoritesComponent } from "./components/favorites.component";
import { ContentComponent } from "./components/content.component";
import { NgxsState } from "./stores/ngxs/ngxs.state";

@NgModule({
  declarations: [AppComponent, SearchComponent, FavoritesComponent, ContentComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgxsModule.forRoot([NgxsState])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
