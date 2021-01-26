import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'fmyp-recipe-editt',
  templateUrl: './recipe-editt.component.html',
  styleUrls: ['./recipe-editt.component.css']
})
export class RecipeEdittComponent implements OnInit {
  editMode = false;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.editMode = params['id'] != null;
        this.recipe = this.recipeService.getRecipe(id);
      }
    );
  }

}
