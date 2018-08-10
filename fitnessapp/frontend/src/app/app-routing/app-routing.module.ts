import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddWorkoutComponent } from '../workout/add-workout/add-workout.component';
import { WorkoutFilterPipe } from '../workout/workout-filter.pipe';
import { WorkoutListComponent } from '../workout/workout-list/workout-list.component';

const appRoutes: Routes = [
  {
    path: 'workout',
    loadChildren: 'src/app/workout/workout.module#WorkoutModule'
  },
  //{ path: '', redirectTo: 'workout/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
