import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAttendanceComponent } from './tab-attendance.component';

describe('TabAttendanceComponent', () => {
  let component: TabAttendanceComponent;
  let fixture: ComponentFixture<TabAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
