import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEstudianteComponent } from './cards-estudiante.component';

describe('CardsEstudianteComponent', () => {
  let component: CardsEstudianteComponent;
  let fixture: ComponentFixture<CardsEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
