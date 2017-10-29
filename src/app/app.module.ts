import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { HomeListPage } from "../pages/home-list/home-list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { ComponentsModule } from "../components/components.module";
import { CalendarPageModule } from "../pages/calendar/calendar.module";

@NgModule({
  declarations: [MyApp, HomePage, ListPage, HomeListPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarPageModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, HomeListPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
