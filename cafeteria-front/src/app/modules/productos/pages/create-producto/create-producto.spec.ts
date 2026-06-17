import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProducto } from './create-producto';

describe('CreateProducto', () => {

  let component: CreateProducto;
  let fixture: ComponentFixture<CreateProducto>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CreateProducto]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProducto);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});