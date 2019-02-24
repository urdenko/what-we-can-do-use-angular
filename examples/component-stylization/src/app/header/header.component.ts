import { Component, Input } from "@angular/core";

@Component({
  selector: "my-cool-app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() label = "";
}
