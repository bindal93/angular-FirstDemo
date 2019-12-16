import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-courses-list",
  templateUrl: "./app-courses-list.component.html",
  styleUrls: ["./app-courses-list.component.css"]
})
export class AppCoursesListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  courses = [
    { courseId: 1, courseName: "Node JS" },
    { courseId: 2, courseName: "Typescript" },
    { courseId: 3, courseName: "Angular" },
    { courseId: 4, courseName: "React JS" }
  ];

  @Input() cName;
  @Output() onRegister = new EventEmitter<string>();
  register(courseName: string) {
    this.onRegister.emit(courseName);
  }
}
