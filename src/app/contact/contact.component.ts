import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts: Contact[] = [];
  contact: Contact = new Contact();

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  // Charger la liste des utilisateurs
  loadContacts(): void {
    this.contactService.getAllContacts().subscribe(
      (data: any) => {
        this.contacts = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Créer un nouvel Contact
  createContact(): void {
    this.contactService.createContact(this.contact).subscribe(
      (data: any) => {
        console.log('Contact créé avec succès : ', data);
        this.loadContacts(); // Recharger la liste après la création
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Mettre à jour un contact
  updateContact(id: number): void {
    this.contactService.updateContact(id, this.contact).subscribe(
      (data) => {
        console.log('Contact mis à jour avec succès : ', data);
        this.loadContacts(); // Recharger la liste après la mise à jour
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Supprimer un contact
  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(
      () => {
        console.log('Contact supprimé avec succès');
        this.loadContacts(); // Recharger la liste après la suppression
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
