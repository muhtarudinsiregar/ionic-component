import * as HC from "highcharts";
window["Highcharts"] = HC;
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
