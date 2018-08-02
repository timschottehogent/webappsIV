export class Workout {
    private _date: Date = new Date();
    private _exercises = new Array<string>();
    private _reps = new Array<number>();
  
    constructor(date: Date) {
      this._date = date;
    }
    get date() : Date {
      return this._date;
    }	
    addExercise(name: string, amount?: number) {
      this._exercises.push(`${amount || 1}  ${name}`);
    }
  }