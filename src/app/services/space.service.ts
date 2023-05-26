import { Injectable } from '@angular/core';
import { Destination, Crew, Technology } from '../interfaces/space.interface';
import data from '../db/data.json';

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  destinations: Destination[] = data.destinations;
  crew: Crew[] = data.crew;
  technology: Technology[] = data.technology;

  constructor() {
    this.destinations = this.addId(this.destinations);
    this.crew = this.addId(this.crew);
    this.technology = this.addId(this.technology);
  }

  findIndex(indexItem: number, array: any[]): any {
    return array.find((item) => (item?.id === indexItem ? item : undefined))!;
  }

  private addId(array: any[]): any[] {
    return array.map((_, index) => ({ ..._, id: index + 1 }));
  }
}
