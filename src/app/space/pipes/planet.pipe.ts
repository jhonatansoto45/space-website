import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planet',
})
export class PlanetPipe implements PipeTransform {
  transform(imagen: string): string {
    return `../../../assets/destination/${imagen}.webp`;
  }
}
