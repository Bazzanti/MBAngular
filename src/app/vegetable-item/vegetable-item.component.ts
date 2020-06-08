import { Component, OnInit, Input } from '@angular/core';
import { Vegetable } from '../models/vegetable.model';

@Component({
  selector: 'app-vegetable-item',
  templateUrl: './vegetable-item.component.html',
  styleUrls: ['./vegetable-item.component.css']
})
export class VegetableItemComponent implements OnInit {
  @Input() vegetable: Vegetable;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
