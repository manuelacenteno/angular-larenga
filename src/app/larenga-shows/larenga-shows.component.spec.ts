import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarengaShowsComponent } from './larenga-shows.component';

describe('LarengaShowsComponent', () => {
  let component: LarengaShowsComponent;
  let fixture: ComponentFixture<LarengaShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarengaShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LarengaShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
