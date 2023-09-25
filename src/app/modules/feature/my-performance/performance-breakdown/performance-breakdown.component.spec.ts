import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceBreakdownComponent } from './performance-breakdown.component';

describe('PerformanceBreakdownComponent', () => {
  let component: PerformanceBreakdownComponent;
  let fixture: ComponentFixture<PerformanceBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceBreakdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
