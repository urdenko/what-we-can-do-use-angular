import { Component } from "@angular/core";
import { InputFileldClassContext } from "../controls/input-fileld/input-fileld-class-context.enum";
import { ButtonclassContext } from "../controls/button/button-class-context.enum";

@Component({
  selector: "my-cool-app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.scss"]
})
export class PostFormComponent {
  InputFileldClassContext = InputFileldClassContext;
  ButtonclassContext = ButtonclassContext;
}
