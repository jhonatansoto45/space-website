import { Component, OnInit } from '@angular/core';
import { Crew, SliderItem } from '../../../interfaces/space.interface';
import { SpaceService } from '../../../services/space.service';
import { TypeTab } from 'src/app/interfaces/tabs.interface';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  slider: SliderItem[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  readonly initalItem: number = 1;
  dataItem!: Crew;

  constructor(private spaceService: SpaceService) {}

  ngOnInit(): void {
    this.dataItem = this.spaceService.findIndex(this.initalItem, this.dataCrew);
  }

  onItemSelected = (item: Crew): Crew => (this.dataItem = item);

  get dataCrew() {
    return [...this.spaceService.crew];
  }

  get typeTab() {
    return TypeTab;
  }
}
