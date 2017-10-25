import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomeListPage } from "./home-list";

@NgModule({
  declarations: [HomeListPage],
  imports: [IonicPageModule.forChild(HomeListPage)],
  schemas: [],
  entryComponents: []
})
export class HomeListPageModule {}
