import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vegetable } from '../models/vegetable.model';
import { VegetableService } from '../service/vegetable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent implements OnInit {
  vegetables: Vegetable[];
  subscription: Subscription;

  constructor(private vegetableService: VegetableService,
    private router: Router,
    private route: ActivatedRoute) {
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

onNewVegetable() {
  this.router.navigate(['new'], {relativeTo: this.route});
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
