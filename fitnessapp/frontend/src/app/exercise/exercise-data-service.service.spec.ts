import { TestBed, inject } from '@angular/core/testing';

import { ExerciseDataService } from '../exercise/exercise-data-service.service';

describe('ExerciseDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseDataService]
    });
  });

  it('should be created', inject([ExerciseDataService], (service: ExerciseDataService) => {
    expect(service).toBeTruthy();
  }));
});
