import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperoContrasena } from './recupero-contrasena';

describe('RecuperoContrasena', () => {
  let component: RecuperoContrasena;
  let fixture: ComponentFixture<RecuperoContrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperoContrasena],
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperoContrasena);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
