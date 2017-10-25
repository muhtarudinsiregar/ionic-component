import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HomeSquareComponent } from "./home-square/home-square";
import { IonicModule } from "ionic-angular";
@NgModule({
  declarations: [HomeSquareComponent],
  imports: [IonicModule],
  exports: [HomeSquareComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
