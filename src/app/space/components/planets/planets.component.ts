import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent  {
  @Input() imageUrl: string = '';

  constructor() {}

}
