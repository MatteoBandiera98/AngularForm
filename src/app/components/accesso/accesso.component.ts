import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.component.html',
  styleUrl: './accesso.component.scss'
})
export class AccessoComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      
      console.log(form.value);
    } else {
      
      console.log('Il form non è valido');
    }
  }
}
