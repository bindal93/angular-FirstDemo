import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
registerForm: FormGroup;

   constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
     this.registerForm = this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['', [Validators.required]],
      address: this.formBuilder.group({
        street: [''],
        zip: [''],
        city: ['']
      })
    });
  }
   testing(){
     debugger;
     alert("inside testing :: "
     +"firstName ::"+this.registerForm.get('firstName').value
     +"lastName ::"+this.registerForm.get('lastName').value
     +"address ::street "+this.registerForm.get('address').value.street
     +" zip "+this.registerForm.get('address').value.zip
     +" city "+this.registerForm.get('address').value.city);
   }

}