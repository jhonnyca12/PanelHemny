import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule) // es el lazyLoad 
  },
  {
    path: 'dashboard', 
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule), // es el lazyLoad 
    //  canActivate: [ ValidarTokenGuard ],
    // canLoad: [ ValidarTokenGuard ]
  },
  {
    path: '**',
    redirectTo : 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
