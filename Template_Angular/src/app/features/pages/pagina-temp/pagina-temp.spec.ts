import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTemp } from './pagina-temp';

describe('PaginaTemp', () => {
  let component: PaginaTemp;
  let fixture: ComponentFixture<PaginaTemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaTemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
