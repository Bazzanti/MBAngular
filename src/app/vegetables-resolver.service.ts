import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { VegetableService } from './service/vegetable.service';
import { Vegetable } from './models/vegetable.model';


@Injectable({ providedIn: 'root' })
export class VegetablesResolverService implements Resolve<Vegetable[]> {
  constructor(
    private recipesService: VegetableService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipesService.getVegetables();
    return recipes;

  }
}
