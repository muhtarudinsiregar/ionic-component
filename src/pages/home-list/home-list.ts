import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the HomeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home-list",
  templateUrl: "home-list.html"
})
export class HomeListPage {
  items: any;
  itemId: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.itemId = this.navParams.get("itemId");
    this.items = this.navParams.get("items");
  }
}
