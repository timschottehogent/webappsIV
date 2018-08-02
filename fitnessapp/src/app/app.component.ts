import { Component } from '@angular/core';
import { Workout } from './workout/workout.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitnessapp';

  private _workouts = new Array<Workout>();

  constructor() {
    const workout1 = new Workout(new Date());
    const workout2 = new Workout(new Date("January 31 1980 12:30"));
	
    this._workouts.push(workout1);
    this._workouts.push(workout2);
  }
  
  newWorkoutAdded(workout) {
    this._workouts.push(workout);
}
}
