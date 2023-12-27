import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'utilisateur', component: UtilisateurComponent },
  { path: 'contact', component: ContactComponent }
  // ... autres routes de l'application
];

@NgModule({
    declarations: [
        AppComponent,
        UtilisateurComponent,
        LoginComponent,
        ContactComponent,
        NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot(routes)
        
    ]
})
export class AppModule { RouterModule: any}
