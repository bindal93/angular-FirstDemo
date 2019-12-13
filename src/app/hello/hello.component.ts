import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"]
})
export class HelloComponent implements OnInit {
  courseName: string = "Angular";

  constructor() {}

  ngOnInit() {}
  changeName() {
    this.courseName = "TypeScript";
  }
  changeNameWithThis(course) {
    this.courseName = course;
  }
}
