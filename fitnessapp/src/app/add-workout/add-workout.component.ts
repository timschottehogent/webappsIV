import { Component, Output, EventEmitter } from '@angular/core';
import { Workout } from '../workout/workout.model';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent  {
  @Output() public newWorkout = new EventEmitter<Workout>();

  constructor() { }



  addWorkout(newWorkoutDate: HTMLInputElement) : boolean {
    const workout = new Workout(new Date(newWorkoutDate.value));
    this.newWorkout.emit(workout);
    return false;
  }

}
