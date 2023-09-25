import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLatestComponent } from './app-latest.component';

describe('AppLatestComponent', () => {
  let component: AppLatestComponent;
  let fixture: ComponentFixture<AppLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
