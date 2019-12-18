import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { HelloComponent2 } from "./hello2.component";
import { NgIfSimpleComponent } from "./ng-if-simple/ng-if-simple.component";
import { SalutationPipe } from "./salutation.pipe";
import { AppCoursesListComponent } from "./app-courses-list/app-courses-list.component";
import { BookService } from "./book/book.service";
import { HttpClientModule } from "@angular/common/http";
import { BookComponent } from "./book/book.component";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [
  {
    path: "bookList",
    component: BookComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HelloComponent2,
    NgIfSimpleComponent,
    SalutationPipe,
    AppCoursesListComponent,
    BookComponent,
    RegistrationFormComponent
  ],
  bootstrap: [AppComponent],
  providers: [BookService]
})
export class AppModule {}
