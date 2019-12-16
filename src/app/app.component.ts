import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Angular";
  message: string;

  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }
}
