import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutFilterPipe } from './workout-filter.pipe';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    ExerciseComponent,
    AddWorkoutComponent,
    WorkoutFilterPipe,
    WorkoutListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
