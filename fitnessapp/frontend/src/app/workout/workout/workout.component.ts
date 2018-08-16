import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workout } from './workout.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  @Input() public workout: Workout;
  @Output() public deleteWorkout = new EventEmitter<Workout>();

  constructor() {}

  ngOnInit() {}

  removeWorkout() {
    this.deleteWorkout.emit(this.workout);
  }
}
