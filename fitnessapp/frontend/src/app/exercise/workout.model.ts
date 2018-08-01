import { Exercise } from './exercise/exercise.model';

export class Workout {
    private _id: string;
    private _name: string;
    private _date: Date;
    private _exercises: Exercise[];
    private _repetitions: number[];
  
    constructor(
      name: string,
      exercises: Exercise[] = [],
      date: Date = null
    ) {
      this._name = name;
      this._exercises = exercises;
      this._date = date;
    }
  
    static fromJSON(json: any): Exercise {
      const rec = new Exercise(
        json.name,
        json.ingredients.map(Exercise.fromJSON),
        json.date
      );
      rec._id = json._id;
      rec._chef = json.chef;
      return rec;
    }
  
    toJSON() {
      return {
        _id: this._id,
        name: this._name,
        exercises: this._exercises.map(ex => ex.toJSON()),
        date: this._date,
        repetitions: this._repetitions.map(rep => rep.toJSON())
      };
    }
  
    get id(): string {
      return this._id;
    }
    get name(): string {
      return this._name;
    }
    get date(): Date {
      return this._date;
    }
    get exercises(): Exercise[] {
      return this._exercises;
    }
    addExercise(ex: Exercise) {
      this._exercises.push(ex);
    }
  
    get repetitions(): number[] {
      return this._repetitions;
    }

    addRepetition(nr: number) {
        this._repetitions.push(nr);
    }
  }