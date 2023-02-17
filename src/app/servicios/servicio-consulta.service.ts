import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { delay, filter, map, Observable, of, Subject } from 'rxjs';
import { Estudiante } from '../modelo/estudiante';

@Injectable({
  providedIn: 'root'
})
export class ServicioConsultaService {

  nombres: string[] = ['Juan', 'Pedro', 'María', 'Ana', 'Luis', 'José', 'Carlos', 'Sofía', 'Marta', 'Lucía'];
  apellidos: string[] = ['Pérez', 'García', 'Rodríguez', 'Martínez', 'González', 'López', 'Sánchez', 'Díaz', 'Fernández', 'Ruiz'];
  arrayEstudiantes: Estudiante[] = [];
  private estudiantesSubject = new Subject<Estudiante[]>();


  constructor(){ 
    this.arrayEstudiantes = this.generarDatosRandom();
  }


  ngOnDestroy(): void {
    this.estudiantesSubject.complete();
  }

  obtnerEstudiantes(): Estudiante[] | any{
    return this.arrayEstudiantes;
  }

  obtnerEstudiantesAsync(): Observable<Estudiante[]>{
    return of(this.arrayEstudiantes).pipe(delay(500));
    
  }

  obtnerEstudiantesAsyncFilter(filtroMatricula: string): Observable<Estudiante[]>{
    console.log("filtroMatricula ", filtroMatricula)  
    console.log("arrayEstudiantes ", this.arrayEstudiantes)
    return of(this.arrayEstudiantes).pipe(
      map(estudiantes => estudiantes.filter(estudiante => estudiante.matricula === filtroMatricula ))
      
    );
    
  }

  obtenerEstudiantesPromise(filtroMatricula?: string): Promise<Estudiante[]> {
    return new Promise((resolve, reject) => {
      let result: Estudiante[];
      if (filtroMatricula) {
        result = this.arrayEstudiantes.filter((estudiante) => estudiante.matricula === filtroMatricula);
        console.log("result mat ", result);
        resolve(result);
      } else {
        result = this.arrayEstudiantes.slice();
        console.log("result no mat", result);
        reject(result);
      }
    });
  }

  generarDatosRandom() {
    let listaRandomEstudiantes: Estudiante[] = [];
    for (let i = 1; i <= 10; i++) {
      const nombre = this.nombres[Math.floor(Math.random() * this.nombres.length)];
      const apellido1 = this.apellidos[Math.floor(Math.random() * this.apellidos.length)];
      const apellido2 = this.apellidos[Math.floor(Math.random() * this.apellidos.length)];
      const matricula = `${Math.floor(Math.random() * 100000000)}`;
      const email = `${nombre.toLowerCase()}.${apellido1.toLowerCase()}@email.com`;
      const numeroTelefono = `555-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`;
      const fechaNacimiento = `${Math.floor(Math.random() * 12 + 1)}/${Math.floor(Math.random() * 28 + 1)}/19${Math.floor(Math.random() * 100 + 1)}`;
      const edad = Math.floor(Math.random() * 50 + 18);
      const urlImagen = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/300`;
      listaRandomEstudiantes.push({nombre, apellido1, apellido2, matricula, email, numeroTelefono, fechaNacimiento, edad, urlImagen
      });      
    }
    return listaRandomEstudiantes;
    }
}
