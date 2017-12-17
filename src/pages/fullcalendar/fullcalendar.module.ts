import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FullcalendarPage } from "./fullcalendar";
import { ComponentsModule } from "../../components/components.module";
import { CalendarModule } from "ap-angular2-fullcalendar";

@NgModule({
  declarations: [FullcalendarPage],
  imports: [IonicPageModule.forChild(FullcalendarPage), CalendarModule]
})
export class FullcalendarPageModule {}
