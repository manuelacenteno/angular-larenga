import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarengaDiscographyComponent } from './larenga-discography.component';

describe('LarengaDiscographyComponent', () => {
  let component: LarengaDiscographyComponent;
  let fixture: ComponentFixture<LarengaDiscographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarengaDiscographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarengaDiscographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
