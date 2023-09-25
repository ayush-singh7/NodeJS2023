import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingTrainingsComponent } from './ongoing-trainings.component';

describe('OngoingTrainingsComponent', () => {
  let component: OngoingTrainingsComponent;
  let fixture: ComponentFixture<OngoingTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
