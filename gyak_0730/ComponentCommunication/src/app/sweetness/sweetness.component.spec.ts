import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetnessComponent } from './sweetness.component';

describe('SweetnessComponent', () => {
  let component: SweetnessComponent;
  let fixture: ComponentFixture<SweetnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
