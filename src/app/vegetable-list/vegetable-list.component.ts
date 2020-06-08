import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vegetable } from '../models/vegetable.model';
import { VegetableService } from '../service/vegetable.service';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {
  vegetables: Vegetable[];

  constructor(private vegetableService: VegetableService,
    private router: Router,
    private route: ActivatedRoute) {
}
ngOnInit() {
  this.vegetables = this.vegetableService.getVegetables();
}

onNewVegetable() {
  this.router.navigate(['new'], {relativeTo: this.route});
}

}
