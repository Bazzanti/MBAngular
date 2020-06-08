import { Component, OnInit } from '@angular/core';
import { VegetableService } from '../service/vegetable.service';
import { Vegetable } from '../models/vegetable.model';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css'],
  providers: [VegetableService]
})
export class VegetableComponent implements OnInit {

  selectedVegetable: Vegetable;

  constructor() { }

  ngOnInit() {

  }
}
