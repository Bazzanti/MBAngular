import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { VegetableService } from './service/vegetable.service';
import { HeaderComponent } from './header/header.component';
import { VegetableItemComponent } from './vegetable-item/vegetable-item.component';
import { VegetableStartComponent } from './vegetable-start/vegetable-start.component';
import { VegetableEditComponent } from './vegetable-edit/vegetable-edit.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { RouterModule } from '@angular/router';
import { FieldComponent } from './field/field.component';
import { CommonModule } from '@angular/common';
import { DragdropVegetableListComponent } from './dragdrop-vegetable-list/dragdrop-vegetable-list.component';
import { DragdropVegetableItemComponent } from './dragdrop-vegetable-list/dragdrop-vegetable-item/dragdrop-vegetable-item.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VegetableGridComponent } from './vegetable-grid/vegetable-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VegetableListComponent,
    DropdownDirective,
    VegetableItemComponent,
    VegetableStartComponent,
    VegetableEditComponent,
    VegetableDetailComponent,
    VegetableComponent,
    FieldComponent,
    DragdropVegetableListComponent,
    DragdropVegetableItemComponent,
    VegetableGridComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    BrowserAnimationsModule,
  ],
  providers: [VegetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
