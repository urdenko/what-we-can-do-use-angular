import { Component } from "@angular/core";
import { UseElementAs } from "../controls/custom-contexts.enum";

@Component({
  selector: "my-cool-app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.scss"]
})
export class PostFormComponent {
  UseElementAs = UseElementAs;
}
