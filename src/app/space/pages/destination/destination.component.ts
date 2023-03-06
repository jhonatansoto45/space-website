import { Component, OnInit } from '@angular/core';
import { TabsItem } from 'src/app/interfaces/space.interface';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  listTabs: TabsItem[] = [
    {
      id: 1,
      name: 'MOON',
    },
    {
      id: 2,
      name: 'MARS',
    },
    {
      id: 3,
      name: 'EUROPA',
    },
    {
      id: 4,
      name: 'TITAN',
    },
  ];

  activeLink!: TabsItem;

  constructor() {
    this.activeLink = this.listTabs[0];
  }

  ngOnInit(): void {}


  onItemSelected(index: number): void {
    this.activeLink = this.listTabs[index];
  }
}
