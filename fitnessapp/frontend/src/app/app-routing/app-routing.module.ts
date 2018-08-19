import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddWorkoutComponent } from '../workout/add-workout/add-workout.component';
import { WorkoutListComponent } from '../workout/workout-list/workout-list.component';
import { AuthGuardService } from '../user/auth-guard.service'

const appRoutes: Routes = [
  {
    path: 'workout',
    canActivate: [ AuthGuardService ],
    loadChildren: 'src/app/workout/workout.module#WorkoutModule'
  },
  {
    path: 'exercise',
    canActivate: [ AuthGuardService ],
    loadChildren: 'src/app/exercise/exercise.module#ExerciseModule'
  },
  { path: '', redirectTo: 'workout/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    //RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
