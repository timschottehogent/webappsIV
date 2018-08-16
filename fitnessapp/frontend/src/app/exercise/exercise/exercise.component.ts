import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from './exercise.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input() public exercise: Exercise;
  @Output() public deleteExercise = new EventEmitter<Exercise>();

  constructor() { }

  ngOnInit() {
  }

  removeExercise() {
    console.log(this.exercise);
    this.deleteExercise.emit(this.exercise);
  }

}
