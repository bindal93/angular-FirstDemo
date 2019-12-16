import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { HelloComponent2 } from "./hello2.component";
import { NgIfSimpleComponent } from "./ng-if-simple/ng-if-simple.component";
import { SalutationPipe } from "./salutation.pipe";
import { AppCoursesListComponent } from "./app-courses-list/app-courses-list.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HelloComponent2,
    NgIfSimpleComponent,
    SalutationPipe,
    AppCoursesListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
