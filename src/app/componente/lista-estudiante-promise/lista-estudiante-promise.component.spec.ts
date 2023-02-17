import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstudiantePromiseComponent } from './lista-estudiante-promise.component';

describe('ListaEstudiantePromiseComponent', () => {
  let component: ListaEstudiantePromiseComponent;
  let fixture: ComponentFixture<ListaEstudiantePromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstudiantePromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEstudiantePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
