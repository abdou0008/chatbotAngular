import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  utilisateur: Utilisateur = new Utilisateur();
  username: string = '';
  password: string = '';
  loginError: boolean = false;


  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          // Gérer la réponse de l'authentification, rediriger vers la page suivante, etc.
          this.router.navigate(['/login']);
        },
        error => {
          // Gérer les erreurs d'authentification
          this.loginError = true;
          console.error('Erreur d\'authentification :', error);
        }
      );
  }

}
