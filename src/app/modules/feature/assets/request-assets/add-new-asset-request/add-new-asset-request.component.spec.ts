import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAssetRequestComponent } from './add-new-asset-request.component';

describe('AddNewAssetRequestComponent', () => {
  let component: AddNewAssetRequestComponent;
  let fixture: ComponentFixture<AddNewAssetRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAssetRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAssetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
