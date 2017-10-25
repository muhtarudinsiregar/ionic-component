import { Component, Input } from "@angular/core";

@Component({
  selector: "home-square",
  templateUrl: "home-square.html"
})
export class HomeSquareComponent {
  text: string;
  @Input() item: any;
  constructor() {}
}
