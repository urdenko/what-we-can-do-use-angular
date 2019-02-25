import { Component } from "@angular/core";
import { UseElementAs } from "../controls/custom-contexts.enum";

@Component({
  selector: "my-cool-app-too-much-text",
  templateUrl: "./too-much-text.component.html",
  styleUrls: ["./too-much-text.component.scss"]
})
export class TooMuchTextComponent {
  UseElementAs = UseElementAs;
  isShowText: boolean;

  onToggleText(): void {
    this.isShowText = !this.isShowText;
  }
}
