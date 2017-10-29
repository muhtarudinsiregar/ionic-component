import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ChartListPage } from "../chart-list/chart-list";
import { ChartConstant } from "../../constant/chart.constant";

@Component({
  selector: "page-chart",
  templateUrl: "chart.html"
})
export class ChartPage {
  menus: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.menus = ChartConstant.getMenus();
  }

  itemTapped(menuData) {
    this.navCtrl.push(ChartListPage, { menuData: menuData });
  }
}
