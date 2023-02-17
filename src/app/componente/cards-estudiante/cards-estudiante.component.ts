import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/modelo/estudiante';
import { ServicioConsultaService } from 'src/app/servicios/servicio-consulta.service';

@Component({
  selector: 'app-cards-estudiante',
  templateUrl: './cards-estudiante.component.html',
  styleUrls: ['./cards-estudiante.component.css']
})
export class CardsEstudianteComponent implements OnInit {
  

  title!: string;

  dataSource$!: Observable<Estudiante[]>;

  constructor(private servicioConsultaService: ServicioConsultaService){}

  ngOnInit(){
    this.title = "Cards de Alumnos Servicio"
    this.dataSource$ = this.servicioConsultaService.obtnerEstudiantesAsync();
  }
}
