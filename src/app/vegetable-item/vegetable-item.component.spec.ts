import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableItemComponent } from './vegetable-item.component';

describe('VegetableItemComponent', () => {
  let component: VegetableItemComponent;
  let fixture: ComponentFixture<VegetableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
