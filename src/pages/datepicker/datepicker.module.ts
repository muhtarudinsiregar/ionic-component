import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatepickerPage } from './datepicker';

@NgModule({
  declarations: [
    DatepickerPage,
  ],
  imports: [
    IonicPageModule.forChild(DatepickerPage),
  ],
})
export class DatepickerPageModule {}
