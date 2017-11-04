import { Component } from "@angular/core";
import { DatePicker } from "@ionic-native/date-picker";

@Component({
  selector: "datepicker",
  templateUrl: "datepicker.html"
})
export class DatepickerComponent {
  initDate: any = "";

  constructor(private datePicker: DatePicker) {}

  openDatepicker(mode: any) {
    this.datePicker
      .show({
        date: new Date(),
        mode: mode,
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK
      })
      .then(
        date => {
          this.initDate = date;
          console.log("Got date: ", date);
        },
        err => console.log("Error occurred while getting date: ", err)
      );
  }
}
