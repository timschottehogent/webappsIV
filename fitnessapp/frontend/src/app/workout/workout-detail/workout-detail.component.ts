import { Component, OnInit } from '@angular/core';
import { WorkoutDataService } from '../workout-data.service';
import { Workout } from '../workout/workout.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
  private _workout: Workout;

  constructor(private route: ActivatedRoute,
    private workoutDataService: WorkoutDataService) { }

  ngOnInit() {
    this.route.data.subscribe(item => this._workout = item['workout']);
    this.route.paramMap.subscribe(pa => this.workoutDataService.getWorkout(pa.get('id')).subscribe(item => this._workout = item));
  }

}
