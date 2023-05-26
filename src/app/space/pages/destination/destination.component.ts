import { Component, OnInit } from '@angular/core';
import { Destination, TabsItem } from '../../../interfaces/space.interface';
import { SpaceService } from '../../../services/space.service';
import { TypeTab } from 'src/app/interfaces/tabs.interface';

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

  readonly initialItem: number = 1;
  dataItem!: Destination;

  constructor(private spaceService: SpaceService) {}

  ngOnInit(): void {
    this.dataItem = this.spaceService.findIndex(
      this.initialItem,
      this.dataDestination
    );
  }

  onItemSelected = (item: Destination): Destination => (this.dataItem = item);

  get dataDestination() {
    return [...this.spaceService.destinations];
  }

  get typeTab() {
    return TypeTab;
  }
}
