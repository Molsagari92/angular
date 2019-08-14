import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCarComponent } from './company-car.component';

describe('CompanyCarComponent', () => {
  let component: CompanyCarComponent;
  let fixture: ComponentFixture<CompanyCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
