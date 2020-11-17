import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarengaBiographyComponent } from './larenga-biography.component';

describe('LarengaBiographyComponent', () => {
  let component: LarengaBiographyComponent;
  let fixture: ComponentFixture<LarengaBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarengaBiographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarengaBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
