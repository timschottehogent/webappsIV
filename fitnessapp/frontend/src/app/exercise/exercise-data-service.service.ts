import { Injectable } from '@angular/core';
import { Exercise } from './exercise/exercise.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ExerciseDataService {
  private readonly _appUrl = '/API/exercises';


  constructor(private http: HttpClient) { 
    
  }

  get exercises(): Observable<Exercise[]> {
    return this.http
      .get(this._appUrl)
      .pipe(
        map((list: any[]): Exercise[] =>
          list.map(
            Exercise.fromJSON
          )
        )
      );
  }

  





  removeExercise(rec: Exercise): Observable<Exercise> {
    return this.http
      .delete(`${this._appUrl}/${rec.id}`)
      .pipe(map(Exercise.fromJSON));
  }

  addNewExercise(exercise: Exercise): Observable<Exercise> {
    return this.http
      .post(`${this._appUrl}/`, exercise)
      .pipe(map(Exercise.fromJSON));
  }


  getExercise(id: string): Observable<Exercise> {
    return this.http
      .get(`${this._appUrl}/${id}`)
      .pipe(map(Exercise.fromJSON));
  }

  
}
