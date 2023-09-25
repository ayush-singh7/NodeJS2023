import { TestBed } from '@angular/core/testing';

import { FoodCalendarDataService } from './food-calendar-data.service';

describe('FoodCalendarDataService', () => {
  let service: FoodCalendarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCalendarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
