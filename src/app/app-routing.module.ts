import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';
import { VegetableStartComponent } from './vegetable-start/vegetable-start.component';
import { VegetableEditComponent } from './vegetable-edit/vegetable-edit.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { VegetablesResolverService } from './vegetables-resolver.service';
import { FieldComponent } from './field/field.component';
import { DragdropVegetableListComponent } from './dragdrop-vegetable-list/dragdrop-vegetable-list.component';
import { VegetableGridComponent } from './vegetable-grid/vegetable-grid.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/vegetable', pathMatch: 'full' },
  { path: 'vegetable', component: VegetableComponent, children: [
     { path: '', component: VegetableStartComponent },
     { path: 'new', component: VegetableEditComponent },
     { path: ':id', component: VegetableDetailComponent, resolve: [VegetablesResolverService] },
     { path: ':id/edit', component: VegetableEditComponent, resolve: [VegetablesResolverService] },
     ]
   },
  { path: 'field', component: FieldComponent },
  { path: 'dragdrop', component: DragdropVegetableListComponent },
  { path: 'grid', component: VegetableGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
