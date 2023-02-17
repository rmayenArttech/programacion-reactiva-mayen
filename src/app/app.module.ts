import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaEstudianteComponent } from './componente/lista-estudiante/lista-estudiante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { CabecerasTitulos20Directive } from './directivas/cabeceras-titulos-20.directive';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CardsEstudianteComponent } from './componente/cards-estudiante/cards-estudiante.component';
import { ListaEstudiantePromiseComponent } from './componente/lista-estudiante-promise/lista-estudiante-promise.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEstudianteComponent,
    NombreCompletoPipe,
    CabecerasTitulos20Directive,
    CardsEstudianteComponent,
    ListaEstudiantePromiseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
