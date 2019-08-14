import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCarComponent } from './personal-car.component';

describe('PersonalCarComponent', () => {
  let component: PersonalCarComponent;
  let fixture: ComponentFixture<PersonalCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
