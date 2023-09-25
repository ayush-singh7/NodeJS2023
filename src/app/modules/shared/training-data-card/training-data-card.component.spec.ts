import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDataCardComponent } from './training-data-card.component';

describe('TrainingDataCardComponent', () => {
  let component: TrainingDataCardComponent;
  let fixture: ComponentFixture<TrainingDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDataCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
