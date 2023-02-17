import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(alumno: any): string {
    return `${alumno.nombre} ${alumno.apellido1}`;
  }

}
