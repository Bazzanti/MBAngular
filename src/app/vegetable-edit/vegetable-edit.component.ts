import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { VegetableService } from '../service/vegetable.service';

@Component({
  selector: 'app-vegetable-edit',
  templateUrl: './vegetable-edit.component.html',
  styleUrls: ['./vegetable-edit.component.css']
})
export class VegetableEditComponent implements OnInit {
  id: number;
  editMode = false;
  vegetableForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private vegetableService: VegetableService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.vegetableService.updateVegetable(this.id, this.vegetableForm.value);
    } else {
      this.vegetableService.addVegetable(this.vegetableForm.value);
    }
    this.onCancel();
  }

  // onAddIngredient() {
  //   (<FormArray>this.vegetableForm.get('ingredients')).push(
  //     new FormGroup({
  //       name: new FormControl(null, Validators.required),
  //       amount: new FormControl(null, [
  //         Validators.required
  //       ])
  //     })
  //   );
  // }

  // onDeleteIngredient(index: number) {
  //   (<FormArray>this.vegetableForm.get('ingredients')).removeAt(index);
  // }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let vegetableName = '';
    let vegetableImagePath = '';
    let vegetableDescription = '';

    if (this.editMode) {
      const vegetable = this.vegetableService.getVegetable(this.id);
      vegetableName = vegetable.name;
      vegetableImagePath = vegetable.imagePath;
      vegetableDescription = vegetable.description;
      // if (vegetable['ingredients']) {
      //   for (let ingredient of vegetable.ingredients) {
      //     vegetableIngredients.push(
      //       new FormGroup({
      //         name: new FormControl(ingredient.name, Validators.required),
      //         amount: new FormControl(ingredient.amount)
      //       })
      //     );
      //   }
      //}
    }

    this.vegetableForm = new FormGroup({
      name: new FormControl(vegetableName, Validators.required),
      imagePath: new FormControl(vegetableImagePath, Validators.required),
      description: new FormControl(vegetableDescription, Validators.required)
    });
  }

}
