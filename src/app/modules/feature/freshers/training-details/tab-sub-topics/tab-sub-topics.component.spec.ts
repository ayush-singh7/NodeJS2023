import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSubTopicsComponent } from './tab-sub-topics.component';

describe('TabSubTopicsComponent', () => {
  let component: TabSubTopicsComponent;
  let fixture: ComponentFixture<TabSubTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSubTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSubTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
