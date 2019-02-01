import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UProductDetailsComponent } from './uproduct-details.component';

describe('UProductDetailsComponent', () => {
  let component: UProductDetailsComponent;
  let fixture: ComponentFixture<UProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
