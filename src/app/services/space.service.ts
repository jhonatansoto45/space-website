import { Injectable } from '@angular/core';
import data from '../db/data.json';
import { Destination, SpaceData } from '../interfaces/space.interface';

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  destinations: Destination[] = data.destinations;

  constructor() {}

  findIndex(indexItem: number): Destination {
    return this.destinations.find((_, index) => index === indexItem)!;
  }
}
