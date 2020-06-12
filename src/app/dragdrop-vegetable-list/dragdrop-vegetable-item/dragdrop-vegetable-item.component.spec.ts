import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropVegetableItemComponent } from './dragdrop-vegetable-item.component';

describe('DragdropVegetableItemComponent', () => {
  let component: DragdropVegetableItemComponent;
  let fixture: ComponentFixture<DragdropVegetableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdropVegetableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropVegetableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
