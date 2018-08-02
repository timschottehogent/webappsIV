import { Component, OnInit, Input } from '@angular/core';
import { Workout } from './workout.model';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  @Input() public workout: Workout;

  constructor() { 

  }

  ngOnInit() {
  }

}
