import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-simple',
  templateUrl: './ng-if-simple.component.html',
  styleUrls: ['./ng-if-simple.component.css']
})
export class NgIfSimpleComponent implements OnInit {
 show: boolean = true;  
  constructor() { }

  ngOnInit() {
  }

}