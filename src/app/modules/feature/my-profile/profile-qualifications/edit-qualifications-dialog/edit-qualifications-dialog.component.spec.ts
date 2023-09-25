import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualificationsDialogComponent } from './edit-qualifications-dialog.component';

describe('EditQualificationsDialogComponent', () => {
  let component: EditQualificationsDialogComponent;
  let fixture: ComponentFixture<EditQualificationsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQualificationsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQualificationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
