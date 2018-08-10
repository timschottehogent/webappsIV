import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from './workout/workout.model';

@Pipe({
  name: 'workoutFilter'
})
export class WorkoutFilterPipe implements PipeTransform {

  transform(workouts: Workout[], month: number): Workout[] {
    if (!month) {
      return workouts;
    }
    return workouts.filter(rec =>
      rec.date.getMonth() == month
    );
  }

}
