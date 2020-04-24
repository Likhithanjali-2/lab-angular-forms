import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RegistrationForm';
  myForm: FormGroup;
  fname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  ngOnInit(): void {
    this.fname = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.lastname = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*'),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.myForm = new FormGroup({
      fname: this.fname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    });
  }

  onSubmit() {
    alert(
      'Form Submitted succesfully!!!\n Check the values in browser console.'
    );
  }
  
}


///////////////////////
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   myForm: FormGroup;
//   fname: FormControl;
//   lastname: FormControl;
//   email: FormControl;
//   password: FormControl;
//   constructor() {}
//   ngOnInit(): void {
//     this.fname = new FormControl('', [
//       Validators.required,
//       Validators.minLength(8),
//     ]);
//     this.lastname = new FormControl('', [
//       Validators.required,
//       Validators.minLength(8),
//     ]);
//     this.email = new FormControl('', [
//       Validators.required,
//       Validators.pattern('[^ @]*@[^ @]*'),
//     ]);
//     this.password = new FormControl('', [
//       Validators.required,
//       Validators.minLength(8),
//     ]);
//     this.myForm = new FormGroup({
//       fname: this.fname,
//       lastname: this.lastname,
//       email: this.email,
//       password: this.password,
//     });
//   }

//   onSubmit() {
//     alert(
//       'Form Submitted succesfully!!!\n Check the values in browser console.'
//     );
//   }
// }
