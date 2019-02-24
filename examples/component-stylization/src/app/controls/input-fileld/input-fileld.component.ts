import { Component, Input } from "@angular/core";

@Component({
  selector: "my-cool-app-input-fileld",
  templateUrl: "./input-fileld.component.html",
  styleUrls: ["./input-fileld.component.scss"]
})
export class InputFiledComponent {
  @Input() label = "";
}
