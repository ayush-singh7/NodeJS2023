import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLeavesComponent } from './floating-leaves.component';

describe('FloatingLeavesComponent', () => {
  let component: FloatingLeavesComponent;
  let fixture: ComponentFixture<FloatingLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingLeavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
