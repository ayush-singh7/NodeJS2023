import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDetailsTraineeComponent } from './training-details-trainee.component';

describe('TrainingDetailsTraineeComponent', () => {
  let component: TrainingDetailsTraineeComponent;
  let fixture: ComponentFixture<TrainingDetailsTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDetailsTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDetailsTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
