import { Component } from "@angular/core";
import { UseControlAs } from "../controls/use-control-as.enum";

@Component({
  selector: "my-cool-app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.scss"]
})
export class PostFormComponent {
  UseControlAs = UseControlAs;
}
