import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { environment } from '../../../environments/environment';

import { AuthResponse, Usuario } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) { }

  registro(name: string, lastName: string, email: string, password: string): Observable<boolean> {
    const usuario: Usuario = {
      name: name,
      email: email,
      uid: 'USUARIO_ID',
      password: password
    };
    this._usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
    let usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]'); // obtiene los usuarios que ya estan

    usuarios.push(usuario); // agregar un nuevo usuario al array

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    localStorage.setItem('token', 'TOKEN_DE_ACCESO');
    return of(true);

  

  

    // const url = `${this.baseUrl}/auth/new`;  
    // const body = { email, lastName, password, name };
    
    // // return this.http.post<AuthResponse>(url, body)
    //   .pipe(
    //    tap( resp => {
    //     if ( resp.ok ){
    //       localStorage.setItem('token', resp.token!); 
    //     }
    //    } ),                                            
    //    map(resp => resp.ok),                                   
    //     catchError(err => of(err.error.msg))
    //   );
  }

  login(email: string, password: string): Observable<boolean> {
    const usuarios: Usuario[] = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find(u => u.email === email);
    console.log(usuarios, usuario, 'usuarios');
    
    if (usuario && usuario.password === password) {
      this._usuario = usuario;
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('token', 'TOKEN_DE_ACCESO');
      return of(true);
    } else {
      return of(false);
    }
    // const url = `${this.baseUrl}/auth`;  ///servicio de api conmunicacion entre bakend con el servicio
    // const body = { email, password };
    //   return of (true) //opcional hay que quitarlo
    // return this.http.post<AuthResponse>(url, body)
    //   .pipe(
    //    tap( resp => {
    //     if ( resp.ok ){
    //       localStorage.setItem('token', resp.token!); 
    //     }
    //    }),                                              //mutacion para la data si es false o true, estos operadores van en cascada es importante el orden
    //    map(resp => resp.ok),                                   ///map funcion para mutar la repuesta y lo que seas que retorne sera el que se suscriba a ese observable
    //     catchError(err => of(err.error.msg))
    //   )

  }


  
  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    const usuarioGuardado = localStorage.getItem('usuario');
    if (token && usuarioGuardado) {
      this._usuario = JSON.parse(usuarioGuardado);
      return of(true);
    } else {
      return of(false);
    }


    // const url = `${ this.baseUrl }/auth/renew`;             //para llamar al token, se le cambia el nombre depende como le pusieron a las carpetas
    // const headers = new HttpHeaders()
    // .set ('x-token', localStorage.getItem('token') || '');

    // return of (true) //opcional
    // return this.http.get<AuthResponse>(url, { headers } )
    //   .pipe(
    //     map( resp => {

    //       localStorage.setItem('token', resp.token!); 
    //       this._usuario = {
    //         name: resp.name!,
    //         uid: resp.uid!,
    //         email: resp.email!
    //       }
    //       return resp.ok;
    //     }),
    //     catchError( err => of(false)) 
    //   );

  }

  logout() {
    //  localStorage.clear();
  }
}