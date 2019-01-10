import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { Recipe } from 'src/app/recipe/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

   @ViewChild('recipeName') recipeNameRef : ElementRef;
   @ViewChild('amount') amountRef : ElementRef;
   @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addRecipe(){

      const ingName = this.recipeNameRef.nativeElement.value;
      const ingAmount = this.amountRef.nativeElement.value; 
      const saveIngredients = new Ingredient(ingName,ingAmount);
      this.newIngredient.emit(saveIngredients);



  }

}
