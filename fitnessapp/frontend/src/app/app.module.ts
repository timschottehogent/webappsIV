import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
