import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.css"]
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      address: this.formBuilder.group({
        street: [""],
        zip: [""],
        city: [""]
      }),
      email: ["", validateEmail]
    });
  }
}
function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = /^[\w._]+@[A-Za-z]+\.(com|co\.in|org)$/;
  return EMAIL_REGEXP.test(c.value)
    ? null
    : {
        message: "Email is invalid"
      };
}
