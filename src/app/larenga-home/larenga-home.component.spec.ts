import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarengaHomeComponent } from './larenga-home.component';

describe('LarengaHomeComponent', () => {
  let component: LarengaHomeComponent;
  let fixture: ComponentFixture<LarengaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarengaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarengaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
