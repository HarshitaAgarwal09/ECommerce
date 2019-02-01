import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AProductsComponent } from './aproducts.component';

describe('AProductsComponent', () => {
  let component: AProductsComponent;
  let fixture: ComponentFixture<AProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
