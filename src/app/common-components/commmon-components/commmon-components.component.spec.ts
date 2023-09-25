import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmonComponentsComponent } from './commmon-components.component';

describe('CommmonComponentsComponent', () => {
  let component: CommmonComponentsComponent;
  let fixture: ComponentFixture<CommmonComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommmonComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmonComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
