import { WorkoutModule } from './workout.module';

describe('WorkoutModule', () => {
  let workoutModule: WorkoutModule;

  beforeEach(() => {
    workoutModule = new WorkoutModule();
  });

  it('should create an instance', () => {
    expect(workoutModule).toBeTruthy();
  });
});
