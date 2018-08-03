import { Exercise } from '../exercise/exercise.model';


export class Workout {
    private _id: string;
    private _date: Date = new Date();
    private _exercises = new Array<Exercise>();
    private _repetitions = new Array<Number>();
  
    constructor(
      date: Date,
      exercises: Exercise[] = [],
      repetitions: Number[] = []
    ) {
      this._date = date;
    }
    get date() : Date {
      return this._date;
    }	
    addExercise(ex: Exercise, reps: number) {
      this._exercises.push(ex);
      this._repetitions.push(reps);
    }

    static fromJSON(json: any): Workout {
      const rec = new Workout(
        json.date,
        json.exercises.map(Exercise.fromJSON),
        json.created
      );
      rec._id = json._id;
      return rec;
    }
  
    toJSON() {
      return {
        _id: this._id,
        date: this._date,
        exercises: this._exercises.map(ex => ex.toJSON()),
        reps: this._repetitions
      };
    }
  }