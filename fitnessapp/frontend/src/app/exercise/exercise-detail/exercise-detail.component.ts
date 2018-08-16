import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseDataService } from '../exercise-data-service.service';
import { Exercise } from '../exercise/exercise.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.css']
})
export class ExerciseDetailComponent implements OnInit {
  private _exercise: Exercise;
  public errorMsg: string;

  constructor(
    private route: ActivatedRoute,
    private exerciseDataService: ExerciseDataService
  ) {}

  get exercise(): Exercise {
    return this._exercise;
  }
  ngOnInit() {
    this.route.data.subscribe(
      item => (this._exercise = item['exercise']),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve exercise: ${error.error}`;
      }
    );
  }
}
