import { Component, Input } from "@angular/core";

@Component({
  selector: "home-rectangular",
  templateUrl: "home-rectangular.html"
})
export class HomeRectangularComponent {
  @Input() items: any;

  constructor() {}
}
