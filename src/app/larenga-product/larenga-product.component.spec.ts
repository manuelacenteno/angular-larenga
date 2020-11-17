import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarengaProductComponent } from './larenga-product.component';

describe('LarengaProductComponent', () => {
  let component: LarengaProductComponent;
  let fixture: ComponentFixture<LarengaProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarengaProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarengaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
