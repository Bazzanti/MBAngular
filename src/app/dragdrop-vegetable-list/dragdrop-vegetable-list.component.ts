import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../models/vegetable.model';
import { VegetableService } from '../service/vegetable.service';
import { Subscription } from 'rxjs';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop-vegetable-list',
  templateUrl: './dragdrop-vegetable-list.component.html',
  styleUrls: ['./dragdrop-vegetable-list.component.css']
})
export class DragdropVegetableListComponent implements OnInit {
  subscription: Subscription;
  vegetables: Vegetable[];
  vegetablesSecond: Vegetable[] = [{name : "cocomero", description: "(__)", imagePath: "https://www.valfrutta.it/imageserver/immagine_pianta/files/2019/orto/cocomero.png"}];


  constructor(private vegetableService: VegetableService) {
}
  ngOnInit() {
    this.subscription = this.vegetableService.vegetablesSelected
    .subscribe(
      (vegs: Vegetable[]) => {
        this.vegetables = vegs;
      }
    );
  
    this.vegetables = this.vegetableService.getVegetables();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  drop(event: CdkDragDrop<Vegetable[]>) {
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
