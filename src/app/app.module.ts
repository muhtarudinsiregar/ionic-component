import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { CalendarPageModule } from "../pages/calendar/calendar.module";
import { HomeListPageModule } from "../pages/home-list/home-list.module";
import { ChartPageModule } from "../pages/chart/chart.module";
import { ChartListPageModule } from "../pages/chart-list/chart-list.module";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { DatepickerPageModule } from "../pages/datepicker/datepicker.module";

@NgModule({
  declarations: [MyApp, HomePage, ListPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarPageModule,
    HomeListPageModule,
    ChartPageModule,
    ChartListPageModule,
    ChartsModule,
    DatepickerPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
