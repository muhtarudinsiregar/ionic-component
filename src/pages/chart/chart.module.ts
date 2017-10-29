import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChartPage } from "./chart";
import { Ng2HighchartsModule } from "ng2-highcharts";
@NgModule({
  declarations: [ChartPage],
  imports: [IonicPageModule.forChild(ChartPage), Ng2HighchartsModule]
})
export class ChartPageModule {}
