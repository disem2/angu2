import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'acDuration'})
export class DurationPipe implements PipeTransform {
  public transform(duration: number): string {
    const hours = Math.floor(duration / 60);
    const min = duration % 60;

    return hours > 0 ? `${hours}h ${min}min` : `${min}min`;
  }
}
