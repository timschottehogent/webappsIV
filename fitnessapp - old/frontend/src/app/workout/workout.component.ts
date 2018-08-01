import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  date: Date;
  amount: number;

  constructor() { 
    this.date = new Date();
    this.amount = 0;
  }

  ngOnInit() {
  }

}
