import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropVegetableListComponent } from './dragdrop-vegetable-list.component';

describe('DragdropVegetableListComponent', () => {
  let component: DragdropVegetableListComponent;
  let fixture: ComponentFixture<DragdropVegetableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdropVegetableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropVegetableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
