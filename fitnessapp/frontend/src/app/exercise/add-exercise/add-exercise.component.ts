import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ExerciseDataService } from '../exercise-data-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Exercise } from '../exercise/exercise.model';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  private exercise: FormGroup;
  public errorMsg: string;

  constructor(private fb: FormBuilder,
    private _exerciseDataServie: ExerciseDataService) { }

  ngOnInit() {
    this.exercise = this.fb.group({
      name: ['', [Validators.required]],
      difficulty: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const exercise = new Exercise(this.exercise.value.name, this.exercise.value.difficulty);
    this._exerciseDataServie.addNewExercise(exercise).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding workout for ${
          exercise.name
        }: ${error.error}`;
      }
    );
  }

}
