import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableStartComponent } from './vegetable-start.component';

describe('VegetableStartComponent', () => {
  let component: VegetableStartComponent;
  let fixture: ComponentFixture<VegetableStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
