import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HomeListPage } from "../home-list/home-list";
import { MenuConstant } from "../../constant/menu.constant";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items: Array<{
    id: number;
    title: string;
    icon: string;
    component: string;
    color: string;
  }>;
  menus: Array<{
    id: number;
    title: string;
    icon: string;
  }>;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.menus = MenuConstant.getMenuHome();
    this.items = MenuConstant.getMenus();
  }

  itemTapped(itemId: number, items: any) {
    this.navCtrl.push(HomeListPage, { itemId: itemId, items: this.items });
  }
}
