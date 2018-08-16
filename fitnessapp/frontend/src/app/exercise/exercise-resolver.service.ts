import { Injectable } from '@angular/core';
import { ExerciseDataService } from './exercise-data-service.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Exercise } from './exercise/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseResolverService implements Resolve<Exercise> {

  constructor(private exerciseService: ExerciseDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Exercise> {
    return this.exerciseService.getExercise(route.params['id']);
  }
}
