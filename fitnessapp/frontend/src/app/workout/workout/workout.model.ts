import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from '../../exercise/exercise/exercise.model';
import { AuthenticationService } from '../../user/authentication.service';



export class Workout {
    private _id: string = '';
    private _user: string = '';
    private _date: Date = new Date();
    private _exercises: Exercise[] = [];
    private _repetitions : Number[] = [];
    //private authenticatService: AuthenticationService;
  
    constructor(
      date: Date
    ) {
      this._date = date;

    }
    get date() : Date {
      return this._date;
    }	

    get id(): string{
      return this._id;
    }
    addExercise(ex: Exercise, reps: number) {
      this._exercises.push(ex);
      this._repetitions.push(reps);
    }

    get exercises(): Exercise[] {
      return this._exercises;
    }
    

    static fromJSON(json: any): Workout {
      const rec = new Workout(
        json.date
        
        
      );
      rec._id = json._id;
      rec._exercises = json.exercises.map(Exercise.fromJSON);
      rec._repetitions = json.repetitions;
      return rec;
    }


    
  
    toJSON() {
      console.log(this._exercises);
      return {
        _id: this._id,
        //user: this.authenticatService.user$.getValue(),
        date: this._date,
        exercises: this._exercises.map(ex => ex.toJSON()),
        reps: this._repetitions
      };
    }
  }