import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  name: string;

  constructor() { 
    this.name = "pompen"
  }

  ngOnInit() {
  }

}
