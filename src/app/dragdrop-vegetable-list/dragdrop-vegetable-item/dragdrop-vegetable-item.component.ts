import { Component, OnInit, Input } from '@angular/core';
import { Vegetable } from 'src/app/models/vegetable.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop-vegetable-item',
  templateUrl: './dragdrop-vegetable-item.component.html',
  styleUrls: ['./dragdrop-vegetable-item.component.css']
})
export class DragdropVegetableItemComponent implements OnInit {
  @Input() vegetable: Vegetable;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


}
