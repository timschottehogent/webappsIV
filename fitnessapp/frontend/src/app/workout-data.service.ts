import { Injectable } from '@angular/core';
import { Workout } from './workout/workout.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exercise } from './exercise/exercise.model';


@Injectable({
  providedIn: 'root'
})
export class WorkoutDataService {
  private readonly _appUrl = '/API/workouts/';


  constructor(private http: HttpClient) { 
    
  }

  get workouts(): Observable<Workout[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]): Workout[] =>
          list.map(item => 
            new Workout(item.date)
          )
        )
      );
  }

  addNewWorkout(workout: Workout): Observable<Workout> {
    return this.http
      .post(this._appUrl, workout)
      .pipe(
        map(
          (item: any): Workout => new Workout(item.date, item.exercises, item.repetitions)));
  }

  addExerciseToWorkout(ex: Exercise, work: Workout): 
    Observable<Exercise> {
      const theUrl = `${this._appUrl}${work.id}/exercises`;
      return this.http.post(theUrl, ex).pipe(map(Exercise.fromJSON));
  }

  
}
