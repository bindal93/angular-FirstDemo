import { Component, OnInit } from "@angular/core";
import { Book } from "./book";
import { BookService } from "./book.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  books: Book[];
  errorMessage: string;
  constructor(private bookService: BookService) {}
  errorMessageB: string;
  successMessageB: string;
  ngOnInit() {
    this.getBooks();

    setTimeout(function(){  this.sendBooks(); }, 4000);
   
  }

  getBooks() {
    this.bookService
      .getBooks()
      .subscribe(
        books => ((this.books = books), books.map(i => console.log(i.name))),
        error => (this.errorMessage = <any>error)
      );
    this.books.map(i => console.log(i.name));
  }
  sendBooks() {
    debugger;
    this.errorMessageB = null;
    this.successMessageB = null;
    this.books.map(i => console.log("name :: "+i.name));
    this.bookService.sendData(this.books).subscribe(
      success => {
        this.successMessageB = success.message;
      },
      error => {
        this.errorMessageB = error.error.message;
      }
    );
  }
}
