import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name: string = "Angular";
  message: string;
  ngOnInit() {
    console.log("Inside parent component : AppComponent");
  }
  courseReg(courseName: string) {
    this.message = `Your registration for ${courseName} is successful`;
  }
  data: Observable<number>;
  myArray: number[] = [];
  errors: boolean = false;
  finished: boolean = false;
  myObservable: Observable<number> = of(1, 2, 3);
  myObservable2: Observable<number[]> = of([1, 2, 3], [4, 5, 6], [7, 8, 9]);
  fetchData() {
    this.data = new Observable(observer => {
      // setTimeout(() => {
      observer.next(11);
      // }, 1000),
      // setTimeout(() => {
      observer.next(12);
      // }, 2000),
      // setTimeout(() => {
      observer.complete();
      // }, 3000);
    });
    let sub = this.data.subscribe(
      value => this.myArray.push(value),
      error => (this.errors = true),
      () => (this.finished = true)
    );
    this.display();
  }

  display() {
    this.myObservable.subscribe(data => console.log(data));
    console.log(this.myObservable.subscribe());
    this.myObservable2.subscribe(data => console.log(data));
  }
}
