import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTrainingCardComponent } from './upcoming-training-card.component';

describe('UpcomingTrainingCardComponent', () => {
  let component: UpcomingTrainingCardComponent;
  let fixture: ComponentFixture<UpcomingTrainingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingTrainingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTrainingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
