import { Component } from '@angular/core';
import { Workout } from './workout/workout.model';
import { WorkoutDataService } from './workout-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WorkoutDataService]
})
export class AppComponent {
  title = 'Fitnessapp';

  //private _workouts = new Array<Workout>();

  constructor(private _workoutDataService: WorkoutDataService) {
    
  }

  get workouts(): Observable<Workout[]>{
    return this._workoutDataService.workouts;
  }
  
  newWorkoutAdded(workout) {
    this._workoutDataService.addNewWorkout(workout);
}
}
