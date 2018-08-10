import { Component, OnInit } from '@angular/core';
import { WorkoutDataService } from '../workout-data.service';
import { Workout } from '../workout/workout.model';

@Component({
  selector: 'workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  private _workouts: Workout[];

  constructor(private _workoutDataService: WorkoutDataService) { }

  ngOnInit() {
    this._workoutDataService.workouts
      .subscribe(items => this._workouts = items);
  }

}
