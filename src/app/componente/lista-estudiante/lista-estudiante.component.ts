import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/modelo/estudiante';
import { ServicioConsultaService } from 'src/app/servicios/servicio-consulta.service';
import { MatTableDataSource } from '@angular/material/table';
import { CdkTableDataSourceInput } from '@angular/cdk/table';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent implements OnInit {
  title!: string;
  columnas: string[] = ['nombre', 'edad', 'matricula'];
  dataSource!: CdkTableDataSourceInput<Estudiante>;
  nombreBusqueda: string = '';
  constructor(private servicioConsultaService: ServicioConsultaService){}

  ngOnInit(){

    this.title = "Lista de Alumnos filtro Pipe"
    
  }
  
  buscar() {
    console.log("this.nombreBusqueda ", this.nombreBusqueda)
    this.servicioConsultaService.obtnerEstudiantesAsyncFilter(this.nombreBusqueda).subscribe(
      (estudiantes: Estudiante[]) => {
        this.dataSource = new MatTableDataSource(estudiantes);
      }
    );
    console.log("this.dataSource ", this.dataSource)
  }
}
