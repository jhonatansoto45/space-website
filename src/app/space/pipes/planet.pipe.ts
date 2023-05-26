import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planet',
})
export class PlanetPipe implements PipeTransform {
  transform(imagen: string): string {
    const array = imagen.split('/');
    const imageUrl = array[array.length - 1];
    return `../../../assets/destination/${imageUrl}`;
  }
}
