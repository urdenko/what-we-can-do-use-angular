import { Component } from "@angular/core";
import { ButtonclassContext } from "../controls/button/button-class-context.enum";

@Component({
  selector: "my-cool-app-too-much-text",
  templateUrl: "./too-much-text.component.html",
  styleUrls: ["./too-much-text.component.scss"]
})
export class TooMuchTextComponent {
  ButtonclassContext = ButtonclassContext;
  isShowText: boolean;

  onToggleText(): void {
    this.isShowText = !this.isShowText;
  }
}
