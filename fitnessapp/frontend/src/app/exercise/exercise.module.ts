import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseFilterPipe } from './exercise-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseDataService } from './exercise-data-service.service';
import { RouterModule, Routes } from '@angular/router';
//import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { ExerciseResolverService } from './exercise-resolver.service';
import { httpInterceptorProviders } from '../http-interceptors'
import { UserModule } from '../user/user.module';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';

const routes = [
  { path: 'list', component: ExerciseListComponent },
  { path: 'add', component: AddExerciseComponent },
  { path: ':id', component: ExerciseDetailComponent,
  resolve: { exercise: ExerciseResolverService }}
];


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    UserModule
  ],
  declarations: [
    ExerciseComponent,
    AddExerciseComponent,
    ExerciseFilterPipe,
    //WorkoutDetailComponent,
    ExerciseComponent,
    ExerciseListComponent,
    ExerciseDetailComponent

  ],
  providers: [
    httpInterceptorProviders, 
    ExerciseDataService,
    ExerciseResolverService
  ]
})
export class ExerciseModule { }
