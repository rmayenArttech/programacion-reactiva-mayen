import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { Estudiante } from 'src/app/modelo/estudiante';
import { ServicioConsultaService } from 'src/app/servicios/servicio-consulta.service';

@Component({
  selector: 'app-lista-estudiante-promise',
  templateUrl: './lista-estudiante-promise.component.html',
  styleUrls: ['./lista-estudiante-promise.component.css']
})
export class ListaEstudiantePromiseComponent {
  title!: string;
  columnas: string[] = ['nombre', 'edad', 'matricula'];
  dataSource!: CdkTableDataSourceInput<Estudiante>;

  public estudiantes: Estudiante[] = [];
  private subscription = new Subscription();


  nombreBusqueda: string = '';
  constructor(private servicioConsultaService: ServicioConsultaService){}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(){
    this.title = "Lista de Alumnos Promise"
  }

  public buscar(): void {
    const promise = this.servicioConsultaService.obtenerEstudiantesPromise(this.nombreBusqueda);
    console.log("promise", promise)
    const observable = from(promise);
    console.log("observable", observable)
    this.subscription.add(
      observable.subscribe((estudiantes) => {
        this.estudiantes = estudiantes;
      })
    );

    console.log("this.estudiantes", this.estudiantes);
  }
}
