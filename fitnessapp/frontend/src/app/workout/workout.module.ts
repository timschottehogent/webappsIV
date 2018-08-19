import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutComponent } from './workout/workout.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutDataService } from './workout-data.service';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutResolverService } from './workout-resolver.service';
import { httpInterceptorProviders } from '../http-interceptors'
import { UserModule } from '../user/user.module';
import { Exercise } from '../exercise/exercise/exercise.model';
import { ExerciseComponent } from '../exercise/exercise/exercise.component';
import { ExerciseModule } from '../exercise/exercise.module';
import { basehttpInterceptorProviders } from '../http-interceptors/index'


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
    RouterModule.forChild(routes),
    UserModule
    //ExerciseModule
  ],
  declarations: [
    WorkoutComponent,
    AddWorkoutComponent,
    WorkoutListComponent,
    WorkoutDetailComponent

  ],
  providers: [
    basehttpInterceptorProviders,
    httpInterceptorProviders, 
    WorkoutDataService,
    WorkoutResolverService
  ]
})



export class WorkoutModule { }
