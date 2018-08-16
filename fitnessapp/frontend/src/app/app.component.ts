import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './user/authentication.service';
import { WorkoutDataService } from './workout/workout-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WorkoutDataService]
})
export class AppComponent {
  constructor(private authService: AuthenticationService) {}

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }
}

