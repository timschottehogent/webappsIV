import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PompenComponent } from './pompen/pompen.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    PompenComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
