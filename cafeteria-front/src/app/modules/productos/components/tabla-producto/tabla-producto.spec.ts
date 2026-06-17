import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEmpleado } from './tabla-producto';

describe('TablaEmpleado', () => {
  let component: TablaEmpleado;
  let fixture: ComponentFixture<TablaEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEmpleado],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaEmpleado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
