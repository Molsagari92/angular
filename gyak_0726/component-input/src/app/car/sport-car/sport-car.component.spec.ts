import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCarComponent } from './sport-car.component';

describe('SportCarComponent', () => {
  let component: SportCarComponent;
  let fixture: ComponentFixture<SportCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
