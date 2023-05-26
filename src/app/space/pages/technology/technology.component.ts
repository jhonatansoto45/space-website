import { Component, OnInit } from '@angular/core';
import { Technology } from '../../../interfaces/space.interface';
import { SpaceService } from '../../../services/space.service';
import { TypeTab } from 'src/app/interfaces/tabs.interface';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  listTabs: { id: number }[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  readonly initalItem: number = 1;
  dataItem!: Technology;

  constructor(private spaceService: SpaceService) {}

  get typeTab() {
    return TypeTab;
  }

  ngOnInit(): void {
    this.dataItem = this.spaceService.findIndex(
      this.initalItem,
      this.dataTechnology
    );
  }

  onItemSelected = (item: Technology): Technology => (this.dataItem = item);

  get dataTechnology() {
    return [...this.spaceService.technology];
  }
}
