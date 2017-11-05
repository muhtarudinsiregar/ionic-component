import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelineListPage } from './timeline-list';

@NgModule({
  declarations: [
    TimelineListPage,
  ],
  imports: [
    IonicPageModule.forChild(TimelineListPage),
  ],
})
export class TimelineListPageModule {}
