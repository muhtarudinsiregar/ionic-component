import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DatepickerListPage } from "../datepicker-list/datepicker-list";
import { DatepickerConstant } from "../../constant/datepicker.constant";

@Component({
  selector: "page-datepicker",
  templateUrl: "datepicker.html"
})
export class DatepickerPage {
  menus: any = "";
  constructor(private navCtrl: NavController) {}

  ionViewDidLoad() {
    this.menus = DatepickerConstant.getList();
  }

  itemTapped(menuData) {
    this.navCtrl.push(DatepickerListPage, { menuData: menuData });
  }
}
