import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAssetsComponent } from './request-assets.component';

describe('RequestAssetsComponent', () => {
  let component: RequestAssetsComponent;
  let fixture: ComponentFixture<RequestAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
