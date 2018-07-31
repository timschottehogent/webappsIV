import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe/recipe.model';
import { RecipeDataService } from './recipe-data.service';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeDataService]
})
export class AppComponent implements OnInit{
  public filterRecipeName: string;
  public filterRecipe$ = new Subject<string>();
  private _recipes;

  ngOnInit(){
    this._recipes = this._recipeDataService.recipes;
  }

  constructor(private _recipeDataService: RecipeDataService) {
    this.filterRecipe$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase()),
        filter(val => !val.startsWith('s'))
      )
      .subscribe(val => (this.filterRecipeName = val));
  }
  get recipes(): Observable<Recipe[]> {
    return this._recipes;
  }
  newRecipeAdded(recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }

  applyFilter(filter: string) {
    this.filterRecipeName = filter;
  }
}