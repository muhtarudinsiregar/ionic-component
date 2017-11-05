import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TimelineListPage } from "./timeline-list";
import { VerticalTimelineModule } from "angular-vertical-timeline";
@NgModule({
  declarations: [TimelineListPage],
  imports: [IonicPageModule.forChild(TimelineListPage), VerticalTimelineModule]
})
export class TimelineListPageModule {}
