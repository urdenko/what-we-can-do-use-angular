import { Component, Input } from "@angular/core";
import { BaseControl } from "../contolr-base";

@Component({
  selector: "my-cool-app-input-fileld",
  templateUrl: "./input-fileld.component.html",
  styleUrls: ["./input-fileld.component.scss"]
})
export class InputFiledComponent extends BaseControl {
  @Input() label = "";
}
