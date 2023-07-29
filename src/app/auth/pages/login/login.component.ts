import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import  Swal  from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

    miFormulario: FormGroup = this.fb.group({
      email: ['jhonnytoycandelo@gmail.com', [Validators.required, Validators.email ]],
      password: ['123456', [Validators.required, Validators.minLength(6) ]],
    });
    

    constructor(private fb: FormBuilder,
                private router: Router,
                private authService: AuthService) {
      
    }


    login() {

      const {email, password } = this.miFormulario.value;
      this.authService.login(email, password).subscribe(ok => {
        
        if (ok === true) {
          this.router.navigateByUrl('/dashboard/home'); //solo agregye el home
        }
        else {
          Swal.fire('Error', 'Dato invalido', 'error');
        }
      });
    }
      // this.authService.login( email, password )      //esto hara una peticion si no el email y el password no es saldra error ,poniendo un correo diferente
      //   .subscribe( ok => {

      //     if( ok === true) {
      //       this.router.navigateByUrl('/dashboard');
      //     }else {
      //       Swal.fire('Error', `${ok}`, 'error');   // este sera el mensaje de error si no es el correo o la contrase;a
      //     }
      //   });

      //this.router.navigateByUrl('/dashboard')
    //}
    passwordVisible = false;
    BottonInvi() {
      this.passwordVisible = !this.passwordVisible;
  }
  
  buttonHide(){

  }
}
