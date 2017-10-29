import { Component, ViewChildren } from "@angular/core";
import { Ng2Highcharts } from "ng2-highcharts";

@Component({
  selector: "highchart",
  templateUrl: "highchart.html"
})
export class HighchartComponent {
  numbers: Array<number> = [];

  @ViewChildren(Ng2Highcharts) allCharts;

  chartData = {
    chart: {
      type: "column"
    },
    title: {
      text: "Chart Example High Chart"
    },

    xAxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    series: [
      {
        name: "NC",
        data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
      },
      {
        name: "OK",
        data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
      },
      {
        name: "KO",
        data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
      },
      {
        name: "VALID",
        data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
      },
      {
        name: "CHECK",
        data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
      },
      {
        name: "COR",
        data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
      }
    ]
  };
  constructor() {}

  updateData() {
    this.numbers = [];
    for (var i = 0; i < 11; i++) {
      this.numbers.push(Math.random() * 100);
    }

    const generateNumber = this.numbers;

    this.allCharts.forEach(chartRef => {
      chartRef.options.series = [
        {
          name: "CHECK",
          data: generateNumber
        },
        {
          name: "COR",
          data: generateNumber
        }
      ];
    });
  }
}
