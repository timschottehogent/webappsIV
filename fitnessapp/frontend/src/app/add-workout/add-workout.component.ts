import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Workout } from '../workout/workout.model';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  private workout: FormGroup;

  ngOnInit(){
    this.workout = new FormGroup({
      date: new FormControl()
    })
  };

  onSubmit() {
    this.workout.emit(new Workout(this.workout.value.name));
  }




}
