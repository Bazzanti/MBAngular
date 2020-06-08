import { Component, OnInit } from '@angular/core';
import { VegetableService } from '../service/vegetable.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Vegetable } from '../models/vegetable.model';

@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrls: ['./vegetable-detail.component.css']
})
export class VegetableDetailComponent implements OnInit {
  vegetable: Vegetable;
  id: number;

  constructor(private vegetableService: VegetableService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.vegetable = this.vegetableService.getVegetable(this.id);
        }
      );
  }

  onEditVegetable() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteVegetable() {
    this.vegetableService.deleteVegetable(this.id);
    this.router.navigate(['/vegetable']);
  }
}
