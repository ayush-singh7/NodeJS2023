import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDocsComponent } from './policy-docs.component';

describe('PolicyDocsComponent', () => {
  let component: PolicyDocsComponent;
  let fixture: ComponentFixture<PolicyDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
