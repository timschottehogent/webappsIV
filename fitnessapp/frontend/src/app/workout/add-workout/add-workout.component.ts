import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Workout } from '../workout/workout.model';
import { Exercise } from '../../exercise/exercise/exercise.model';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WorkoutDataService } from '../workout-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ExerciseDataService } from '../../exercise/exercise-data-service.service';
import { TypeofExpr, toTypeScript } from '../../../../node_modules/@angular/compiler';
import { AngularWaitBarrier } from '../../../../node_modules/blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  public workout: FormGroup;
  public errorMsg: string;
  public exercisesarray: Exercise[];

  constructor(
    private fb: FormBuilder,
    private _workoutDataService: WorkoutDataService,
    private _exerciseDataService: ExerciseDataService
  ){}

  ngOnInit(){
    this._exerciseDataService.exercises.subscribe(res => this.exercisesarray = res, error => this.errorMsg = <any>error);
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
          lastElement.name 
        ) {
          this.exercises.push(this.createExercises());
        } else if (exList.length >= 2) {
          const secondToLast = exList[exList.length - 2];
          if (
            !lastElement.name &&
            !lastElement.difficulty &&
            (!secondToLast.name )
          ) {
            this.exercises.removeAt(this.exercises.length - 1);
          }
        }
      });
  }

  onSubmit() {
    var workout: Workout;
    workout = new Workout(this.workout.value.date);


    for (const ex of this.workout.value.exercises) {

      if (ex.name != undefined && ex.name != '' && ex.name != null) { 
        let temp: Exercise;
        temp = this.exercisesarray.find(o => o.id == ex.name);
        workout.addExercise(temp, ex.repetitions);
        
      }
    }
    console.log(workout);
    this._workoutDataService.addNewWorkout(workout).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding workout for ${
          workout.date
        }: ${error.message}`; 
      }
    );
  }

  

  createExercises(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.minLength(3)]],
      repetitions: ['', [Validators.required]]
    })
  }

  get exercises(): FormArray {
    return <FormArray>this.workout.get('exercises');
  }




}
