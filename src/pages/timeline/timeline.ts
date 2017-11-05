import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { TimelineConstant } from "../../constant/timeline.constant";
import { TimelineListPage } from "../timeline-list/timeline-list";

@Component({
  selector: "page-timeline",
  templateUrl: "timeline.html"
})
export class TimelinePage {
  menus: any = "";
  constructor(private navCtrl: NavController) {}

  ionViewDidLoad() {
    this.menus = TimelineConstant.getMenus();
  }

  itemTapped(menuData) {
    this.navCtrl.push(TimelineListPage, { menuData: menuData });
  }
}
