import { Component, OnInit } from '@angular/core';
import { Destination, TabsItem } from '../../../interfaces/space.interface';
import { SpaceService } from '../../../services/space.service';

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
  dataItem!: Destination;

  constructor(private spaceService: SpaceService) {}

  ngOnInit(): void {
    this.activeLink = this.listTabs[0];
    this.dataItem = this.spaceService.findIndex(0);
  }

  onItemSelected(index: number): void {
    this.activeLink = this.listTabs[index];
    this.dataItem = this.spaceService.findIndex(index);
  }
}
