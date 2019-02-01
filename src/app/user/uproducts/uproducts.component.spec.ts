import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UProductsComponent } from './uproducts.component';

describe('UProductsComponent', () => {
  let component: UProductsComponent;
  let fixture: ComponentFixture<UProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
