import { EventEmitter, Injectable } from '@angular/core';
import { Vegetable } from '../models/vegetable.model';

@Injectable()
export class VegetableService {
    vegetablesSelected = new EventEmitter<Vegetable[]>();

  private vegetables: Vegetable[] = [
    new Vegetable(
      'Pomodoro',
      'Descrizione pomodoro',
      'https://upload.wikimedia.org/wikipedia/commons/6/6c/Tomato-global.png'
      ),
    new Vegetable(
      'Insalata',
      'Descrizione insalata aaaaaaa aaaaa aaaaa',
      'https://www.giardinaggio.it/orto/piante/insalatina_NG1.jpg'
      ),
    new Vegetable(
        'Patata',
        'Descrizione Patata ',
        'https://img.huffingtonpost.com/asset/5cc11603240000360022489c.jpeg'
    ),
    new Vegetable(
        'Zucchina',
        'Descrizione zucchina',
        'https://blog.liebherr.com/frigoriferi-congelatori/it/wp-content/uploads/sites/19/2017/08/Zucchini_Panther-721x400.jpg'
    )
  ];

  getVegetables() {
    return this.vegetables.slice();
  }

  getVegetable(index: number) {
    return this.vegetables[index];
  }

  addVegetable(vegetable: Vegetable) {
    this.vegetables.push(vegetable);
    this.vegetablesSelected.next(this.vegetables.slice());
  }

  updateVegetable(index: number, newVegetable: Vegetable) {
    this.vegetables[index] = newVegetable;
    this.vegetablesSelected.next(this.vegetables.slice());
  }

  deleteVegetable(index: number) {
    this.vegetables.splice(index, 1);
    this.vegetablesSelected.next(this.vegetables.slice());
  }


}
