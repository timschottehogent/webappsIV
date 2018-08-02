import { Injectable } from '@angular/core';
import { Workout } from './workout/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutDataService {
  private _workouts = new Array<Workout>();

  constructor() { 
    let workout1 = new Workout(new Date());
    let workout2 = new Workout(new Date("January 31 1980 12:30"));

    this._workouts.push(workout1);
    this._workouts.push(workout2);
  }

  get workouts() : Workout[] {
    return this._workouts;
  }

  addNewWorkout(workout) {
    this._workouts.push(workout);
  }
}
