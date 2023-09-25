import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPitchComponent } from './my-pitch.component';

describe('MyPitchComponent', () => {
  let component: MyPitchComponent;
  let fixture: ComponentFixture<MyPitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
