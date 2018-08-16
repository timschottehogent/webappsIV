import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { Exercise } from '../exercise/exercise.model';
import { ExerciseDataService } from '../exercise-data-service.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  public filterExerciseName: string;
  public filterExercise$ = new Subject<string>();
  public errorMsg: string;

  private _exercises: Exercise[];

  constructor(private _exerciseDataService: ExerciseDataService) {
    this.filterExercise$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterExerciseName = val));
  }

  ngOnInit(): void {
    this._exerciseDataService.exercises.subscribe(
      exercises => (this._exercises = exercises),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve exercises: ${error.error}`;
      }
    );
  }

  get exercises() {
    return this._exercises;
  }

  removeExercise(exercise: Exercise) {
    this._exerciseDataService.removeExercise(exercise).subscribe(
      item => (this._exercises = this._exercises.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while removing exercises for ${
          exercise.name
        }: ${error.error}`;
      }
    );
  }

}
