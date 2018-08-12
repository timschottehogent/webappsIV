import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutFilterPipe } from './workout-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutDataService } from './workout-data.service';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutResolverService } from './workout-resolver.service';
import { httpInterceptorProviders } from '../http-interceptors'

const routes = [
  { path: 'list', component: WorkoutListComponent },
  { path: 'add', component: AddWorkoutComponent },
  { path: ':id', component: WorkoutDetailComponent,
  resolve: { workout: WorkoutResolverService }}
];

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WorkoutComponent,
    ExerciseComponent,
    AddWorkoutComponent,
    WorkoutListComponent,
    WorkoutFilterPipe,
    WorkoutDetailComponent

  ],
  providers: [
    httpInterceptorProviders, 
    WorkoutDataService,
    WorkoutResolverService
  ]
})
export class WorkoutModule { }
