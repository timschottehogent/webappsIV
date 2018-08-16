import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from './exercise/exercise.model';

@Pipe({
  name: 'exerciseFilter'
})
export class ExerciseFilterPipe implements PipeTransform {
  transform(exercises: Exercise[], name: string): Exercise[] {
    if (!name || name.length === 0) {
      return exercises;
    }
    return exercises.filter(
      rec => rec.name && rec.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}
