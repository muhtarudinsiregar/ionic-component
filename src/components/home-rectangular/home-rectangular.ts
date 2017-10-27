import { Component } from '@angular/core';

/**
 * Generated class for the HomeRectangularComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-rectangular',
  templateUrl: 'home-rectangular.html'
})
export class HomeRectangularComponent {

  text: string;

  constructor() {
    console.log('Hello HomeRectangularComponent Component');
    this.text = 'Hello World';
  }

}
