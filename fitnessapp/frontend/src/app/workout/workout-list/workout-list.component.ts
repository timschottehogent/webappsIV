import { Component, OnInit } from '@angular/core';
import { WorkoutDataService } from '../workout-data.service';
import { Workout } from '../workout/workout.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user/authentication.service';
import { Chart } from 'chart.js'


@Component({
  selector: 'workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  private _workouts: Workout[];
  public errorMsg: string;
  public userName: string;
  public data: number[];
  public labels: string[];

  constructor(private _workoutDataService: WorkoutDataService, private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this._workoutDataService.workouts
      .subscribe(items => (this._workouts = items)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${
          error.status
        } while trying to retrieve workouts: ${error.error}`;
      }
     
      

    this._authenticationService.user$.subscribe(item => this.userName = item);
    
  }

  get workouts(){
    return this._workouts;
  }

  

  removeWorkout(workout: Workout){
    this._workoutDataService.removeWorkout(workout).subscribe(
      item => (this._workouts = this._workouts.filter(val => item.id !== val.id)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while removing workouts for ${
          workout.date
        }: ${error.error}`;
      }
    );
  }

}

