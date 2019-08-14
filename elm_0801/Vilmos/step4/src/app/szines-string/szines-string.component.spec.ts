import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzinesStringComponent } from './szines-string.component';

describe('SzinesStringComponent', () => {
  let component: SzinesStringComponent;
  let fixture: ComponentFixture<SzinesStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzinesStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzinesStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
