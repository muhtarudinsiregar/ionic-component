import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-datepicker-list",
  templateUrl: "datepicker-list.html"
})
export class DatepickerListPage {
  menu: any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.menu = this.navParams.get("menuData");
  }
}
