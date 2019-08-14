import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildAnimalComponent } from './wild-animal.component';

describe('WildAnimalComponent', () => {
  let component: WildAnimalComponent;
  let fixture: ComponentFixture<WildAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
