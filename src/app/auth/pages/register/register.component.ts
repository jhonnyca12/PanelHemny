import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  miFormulario: FormGroup = this.fb.group({
    name: ['jhonnyca', [Validators.required ]],
    lastName: ['Candelo', [Validators.required ]],
    email: ['jhonnytoycandelo@gmail.com', [Validators.required, Validators.email ]],
    password: ['123456', [Validators.required, Validators.minLength(6) ]],
  });
  

  constructor(private fb: FormBuilder, 
              private router: Router,
              private authService: AuthService) {}


  registro() { 
      const {name, lastName, email, password } = this.miFormulario.value;
      this.authService.registro( name, lastName, email, password)
      .subscribe( ok => {
  
          if( ok === true) {
            this.router.navigateByUrl('/dashboard');
          } else {
            Swal.fire('Error', `${ok}`, 'error');
          }
        });
    
    
    // const {name, lastName, email, password } = this.miFormulario.value;
    // this.authService.registro( name, lastName, email, password,)      //esto hara una peticion si no el email y el password no es saldra error ,poniendo un correo diferente
    //   .subscribe( ok => {

    //     if( ok === true) {
    //       this.router.navigateByUrl('/dashboard');
    //     }else {
    //       Swal.fire('Error', `${ok}`, 'error');   // este sera el mensaje de error si no es el correo o la contrase;a
    //     }
    //   });
  }
  passwordVisible = false;
    BottonInvi() {
      this.passwordVisible = !this.passwordVisible;
  }

}
