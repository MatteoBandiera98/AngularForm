import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confermaPassword: ['', Validators.required], 
      genere: ['', Validators.required],
      biografia: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }, {
      validator: this.passwordMatchValidator 
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(JSON.stringify(this.registrationForm.value));
    } else {
      console.log('Il form non è valido');
    }
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confermaPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ 'passwordMismatch': true });
      return { 'passwordMismatch': true };
    } else {
      confirmPassword.setErrors(null);
      return null;
    }
  }
}
