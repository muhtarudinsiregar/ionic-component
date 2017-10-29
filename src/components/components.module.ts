import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeSquareComponent } from "./home-square/home-square";
import { IonicModule } from "ionic-angular";
import { HomeRectangularComponent } from "./home-rectangular/home-rectangular";
import { HighchartComponent } from "./highchart/highchart";
import { Ng2HighchartsModule } from "ng2-highcharts";

@NgModule({
  declarations: [
    HomeSquareComponent,
    HomeRectangularComponent,
    HighchartComponent,
    HighchartComponent
  ],
  imports: [IonicModule, Ng2HighchartsModule],
  exports: [HomeSquareComponent, HomeRectangularComponent, HighchartComponent,
    HighchartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
