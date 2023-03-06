import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  @Input() imageUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
