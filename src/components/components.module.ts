import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeSquareComponent } from "./home-square/home-square";
import { IonicModule } from "ionic-angular";
import { HomeRectangularComponent } from "./home-rectangular/home-rectangular";
@NgModule({
  declarations: [HomeSquareComponent, HomeRectangularComponent],
  imports: [IonicModule],
  exports: [HomeSquareComponent, HomeRectangularComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
