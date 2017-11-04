import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { DatepickerListPage } from "./datepicker-list";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [DatepickerListPage],
  imports: [IonicPageModule.forChild(DatepickerListPage), ComponentsModule]
})
export class DatepickerListPageModule {}
