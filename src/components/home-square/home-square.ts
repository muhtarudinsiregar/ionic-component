import { Component, Input } from "@angular/core";

@Component({
  selector: "home-square",
  templateUrl: "home-square.html"
})
export class HomeSquareComponent {
  @Input() items: any;
  constructor() {
    console.log(this.items);
  }
}
