import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTrainingDetailsComponent } from './tab-training-details.component';

describe('TabTrainingDetailsComponent', () => {
  let component: TabTrainingDetailsComponent;
  let fixture: ComponentFixture<TabTrainingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTrainingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
