import { Component, OnInit } from '@angular/core';
import { Vegetable } from '../models/vegetable.model';
import { VegetableService } from '../service/vegetable.service';
import { Subscription } from 'rxjs';
import { moveItemInArray, transferArrayItem, CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
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

  dropCopy(event: CdkDragDrop<Vegetable[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  dropDelete(event: CdkDragDrop<Vegetable[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      //this.vegetablesSecond.splice(event.previousIndex, 1);
      //console.log(this.vegetablesSecond);
    }
  }
}
