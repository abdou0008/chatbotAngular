import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService { 
private baseUrl = 'http://localhost:8087/api/contacts';
  
constructor(private http: HttpClient) { }

// Méthode pour récupérer tous les utilisateurs
getAllContacts(): Observable<Contact[]> {
  return this.http.get<Contact[]>(this.baseUrl);
}

// Méthode pour récupérer un contact par ID
getContactById(id: number): Observable<Contact> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Contact>(url);
}

// Méthode pour créer un nouvel Contact
createContact(contact: Contact): Observable<Contact> {
  return this.http.post<Contact>(this.baseUrl, contact);
}

// Méthode pour mettre à jour un Contact
updateContact(id: number, contact: Contact): Observable<Contact> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.put<Contact>(url, contact);
}

// Méthode pour supprimer un Contact
deleteContact(id: number): Observable<any> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete(url);
}
}
