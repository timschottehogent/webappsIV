import { Component, OnInit } from '@angular/core';
import { ExerciseComponent } from '../exercise/exercise.component';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  date: Date;
  exercise: Exercise[];
  repetitions: number[];
  


  constructor() { }

  ngOnInit() {
  }

}
