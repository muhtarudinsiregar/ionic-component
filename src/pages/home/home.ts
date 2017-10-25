import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HomeListPage } from "../home-list/home-list";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items: Array<{ title: string; icon: string; component: string }>;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.items = [
      {
        title: "Menu Square",
        icon: "home",
        component: "menu-square"
      },
      { title: "Menu Rectangular", icon: "home", component: "home-rectangular" }
    ];
  }

  itemTapped(item: any) {
    this.navCtrl.push(HomeListPage, { item: item });
  }
}
