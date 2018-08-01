import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pompen',
  templateUrl: './pompen.component.html',
  styleUrls: ['./pompen.component.css']
})
export class PompenComponent implements OnInit {
  @Input() amount : number;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
