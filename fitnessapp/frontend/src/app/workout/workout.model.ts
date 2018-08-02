import { Exercise } from './exercise/exercise.model';


export class Workout {
    private _id: string;
    private _date: Date = new Date();
    private _exercises = new Array<string>();
    private _reps = new Array<number>();
  
    constructor(
      date: Date,
      exercises: Exercise[] = [],
      repetitions = Number[] = []
    ) {
      this._date = date;
    }
    get date() : Date {
      return this._date;
    }	
    addExercise(name: string, amount?: number) {
      this._exercises.push(`${amount || 1}  ${name}`);
    }

    static fromJSON(json: any): Workout {
      const rec = new Workout(
        json.date,
        json.ingredients.map(Ingredient.fromJSON),
        json.created
      );
      rec._id = json._id;
      rec._chef = json.chef;
      return rec;
    }
  
    toJSON() {
      return {
        _id: this._id,
        name: this._name,
        ingredients: this._ingredients.map(ing => ing.toJSON()),
        created: this._dateAdded,
        chef: this._chef
      };
    }
  }