import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Controls } from "./controls";
import { AppComponent } from "./app.component";
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { PostFormComponent } from "./post-form/post-form.component";
import { TooMuchTextComponent } from "./too-much-text/too-much-text.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [...Controls, HeaderComponent, AppComponent, LeftSidebarComponent, PostFormComponent, TooMuchTextComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
