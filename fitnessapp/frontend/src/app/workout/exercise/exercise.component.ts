import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from './exercise.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  @Input() public exercise: Exercise;

  constructor() { }

  ngOnInit() {
  }

}
