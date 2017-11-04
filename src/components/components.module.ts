import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeSquareComponent } from "./home-square/home-square";
import { IonicModule } from "ionic-angular";
import { HomeRectangularComponent } from "./home-rectangular/home-rectangular";
import { HighchartComponent } from "./highchart/highchart";
import { Ng2HighchartsModule } from "ng2-highcharts";
import { ChartjsComponent } from "./chartjs/chartjs";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { DatepickerComponent } from "./datepicker/datepicker";
import { DatePicker } from "@ionic-native/date-picker";
import { DatepickerJsComponent } from "./datepicker-js/datepicker-js";
import { DatePickerModule } from "ionic3-datepicker";

@NgModule({
  declarations: [
    HomeSquareComponent,
    HomeRectangularComponent,
    HighchartComponent,
    HighchartComponent,
    ChartjsComponent,
    DatepickerComponent,
    DatepickerJsComponent
  ],
  providers: [DatePicker],
  imports: [IonicModule, Ng2HighchartsModule, ChartsModule, DatePickerModule],
  exports: [
    HomeSquareComponent,
    HomeRectangularComponent,
    HighchartComponent,
    HighchartComponent,
    ChartjsComponent,
    DatepickerComponent,
    DatepickerJsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
