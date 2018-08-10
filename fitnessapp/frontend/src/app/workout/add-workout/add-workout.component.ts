import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Workout } from '../workout/workout.model';
import { Exercise } from '../exercise/exercise.model';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WorkoutDataService } from '../workout-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  public workout: FormGroup;
  public errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private _workoutDataServie: WorkoutDataService
  ){}

  ngOnInit(){
    this.workout = this.fb.group({
      date: ['', [Validators.required]],
      exercises: this.fb.array([this.createExercises()])
    });

    this.exercises.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(exList => {
        // if the last entry's name is typed, add a new empty one
        // if we're removing an entry's name, and there is an empty one after that one, remove the empty one
        const lastElement = exList[exList.length - 1];
        if (
          lastElement.name &&
          lastElement.name.length > 2
        ) {
          this.exercises.push(this.createExercises());
        } else if (exList.length >= 2) {
          const secondToLast = exList[exList.length - 2];
          if (
            !lastElement.name &&
            !lastElement.difficulty &&
            (!secondToLast.name ||
              secondToLast.name.length < 2)
          ) {
            this.exercises.removeAt(this.exercises.length - 1);
          }
        }
      });
  }

  onSubmit() {
    const workout = new Workout(this.workout.value.data);
    for(const ex of this.workout.value.exercises){
      if(ex.name.length > 2){
        const exercise = new Exercise(
          ex.name,
          ex.difficulty
        );
        workout.addExercise(exercise, 1);
      }
    }
    this._workoutDataServie.addNewWorkout(workout).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding workout for ${
          workout.date
        }: ${error.error}`;
      }
    );
  }

  createExercises(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      difficulty: ['']
    })
  }

  get exercises(): FormArray {
    return <FormArray>this.workout.get('exercises');
  }




}
