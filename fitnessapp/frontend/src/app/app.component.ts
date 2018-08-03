import { Component, OnInit } from '@angular/core';
import { Workout } from './workout/workout.model';
import { WorkoutDataService } from './workout-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WorkoutDataService]
})
export class AppComponent  implements OnInit{
  title = 'Fitnessapp';

  private _workouts: Workout[];

  ngOnInit(){
    this._workoutDataService.workouts.subscribe(
      workouts => (this._workouts = workouts)
    );
  }

  constructor(private _workoutDataService: WorkoutDataService) {
    
  }

  get workouts(){
    return this._workouts;
  }
  
  newWorkoutAdded(workout) {
    this._workoutDataService
    .addNewWorkout(workout)
    .subscribe((work: Workout) => this._workouts.push(work));
}
}
