import { TestBed } from '@angular/core/testing';

import { ServicioConsultaService } from './servicio-consulta.service';

describe('ServicioConsultaService', () => {
  let service: ServicioConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
