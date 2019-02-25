import { Component } from "@angular/core";
import { UseControlAs } from "../controls/use-control-as.enum";

@Component({
  selector: "my-cool-app-too-much-text",
  templateUrl: "./too-much-text.component.html",
  styleUrls: ["./too-much-text.component.scss"]
})
export class TooMuchTextComponent {
  UseControlAs = UseControlAs;
  isShowText: boolean;

  onToggleText(): void {
    this.isShowText = !this.isShowText;
  }
}
