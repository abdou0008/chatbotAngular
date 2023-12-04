import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  utilisateur: Utilisateur = new Utilisateur();

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.loadUtilisateurs();
  }

  // Charger la liste des utilisateurs
  loadUtilisateurs(): void {
    this.utilisateurService.getAllUtilisateurs().subscribe(
      (data: any) => {
        this.utilisateurs = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Créer un nouvel utilisateur
  createUtilisateur(): void {
    this.utilisateurService.createUtilisateur(this.utilisateur).subscribe(
      (data: any) => {
        console.log('Utilisateur créé avec succès : ', data);
        this.loadUtilisateurs(); // Recharger la liste après la création
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Mettre à jour un utilisateur
  updateUtilisateur(id: number): void {
    this.utilisateurService.updateUtilisateur(id, this.utilisateur).subscribe(
      (data) => {
        console.log('Utilisateur mis à jour avec succès : ', data);
        this.loadUtilisateurs(); // Recharger la liste après la mise à jour
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Supprimer un utilisateur
  deleteUtilisateur(id: number): void {
    this.utilisateurService.deleteUtilisateur(id).subscribe(
      () => {
        console.log('Utilisateur supprimé avec succès');
        this.loadUtilisateurs(); // Recharger la liste après la suppression
      },
      (error) => {
        console.log(error);
      }
    );
  }
}


