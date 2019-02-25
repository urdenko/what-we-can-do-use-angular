import { Component, Input } from "@angular/core";
import { BaseControl } from "../contolr-base";

@Component({
  selector: "my-cool-app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent extends BaseControl {
  @Input() label = "";
}
