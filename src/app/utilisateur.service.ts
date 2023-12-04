import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseUrl = 'http://localhost:8087/api/utilisateurs';
  
  constructor(private http: HttpClient) { }

  // Méthode pour récupérer tous les utilisateurs
  getAllUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.baseUrl);
  }

  // Méthode pour récupérer un utilisateur par ID
  getUtilisateurById(id: number): Observable<Utilisateur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Utilisateur>(url);
  }

  // Méthode pour créer un nouvel utilisateur
  createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.baseUrl, utilisateur);
  }

  // Méthode pour mettre à jour un utilisateur
  updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Utilisateur>(url, utilisateur);
  }

  // Méthode pour supprimer un utilisateur
  deleteUtilisateur(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}


