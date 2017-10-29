import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-chart-list",
  templateUrl: "chart-list.html"
})
export class ChartListPage {
  menu: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.menu = this.navParams.get("menuData");
  }
}
