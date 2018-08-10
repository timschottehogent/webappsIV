import { Injectable } from '@angular/core';
import { WorkoutDataService } from './workout-data.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { Workout } from './workout/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutResolverService implements Resolve<Workout> {

  constructor(private workoutService: WorkoutDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Workout> {
    return this.workoutService.getWorkout(route.params['id']);
  }
}
