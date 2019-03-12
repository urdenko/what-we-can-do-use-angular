import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { AppComponent } from "./app.component";
import { NgxsComponent } from "./components/ngxs/ngxs.component";
import { NgxsState } from "./stores/ngxs/ngxs.state";

@NgModule({
  declarations: [AppComponent, NgxsComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgxsModule.forRoot([NgxsState])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
