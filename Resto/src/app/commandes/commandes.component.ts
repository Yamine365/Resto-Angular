import { Component } from '@angular/core';
import{Commande}from '../model/commande.model';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrl: './commandes.component.scss'
})
export class CommandesComponent {
  tab_com: Commande[] = []; 
  constructor(private articleService: ArticleService , private router: Router) {
    this.tab_com = articleService.listecommande(); [
  {codea : 1, nom  : "Spaghetti Bolognese", prix : 21, quantite : 8, datePass : new Date("09/27/2024")},
  {codea : 2, nom : "Lasagne fruit de mer", prix : 24.9, quantite : 11, datePass : new Date("09/30/2024")},
  {codea : 3, nom : "Tacos", prix : 10, quantite : 5, datePass : new Date("10/02/2024")},
  {codea : 4 , nom : "Cheeseburger"  , prix : 11.6 , quantite : 10 , datePass: new Date("10/11/2024")},
  {codea : 5 , nom : "Salade César"  , prix : 17 , quantite : 3 , datePass: new Date("2/1/2024")},
  {codea : 6 , nom : "Crêpes "  , prix : 14 , quantite : 13 , datePass: new Date("10/2/2024")},
  {codea : 7 , nom : "Gâteau au chocolat"  , prix : 8 , quantite : 22 , datePass: new Date("1/11/2024")},
  {codea : 8 , nom : "Fish and chips"  , prix : 20 , quantite : 5 , datePass: new Date("10/10/2024")},
  {codea : 9 , nom : "Curry de légumes"  , prix : 17 , quantite : 2 , datePass: new Date("6/9/2024")},
  {codea : 10 , nom : "Soupe à l'oignon"  , prix : 10 , quantite : 1 , datePass: new Date("12/7/2024")},
  {codea : 11 , nom : "Couscous"  , prix : 15.3 , quantite : 30 , datePass: new Date("11/4/2024")},
  {codea : 12 , nom : "Boeuf bourguignon"  , prix : 15 , quantite : 6 , datePass: new Date("7/5/2024")},
  {codea : 13 , nom : "Tarte Tatin"  , prix : 16 , quantite : 9 , datePass: new Date("10/12/2024")},
  {codea : 14 , nom : "Sushi"  , prix : 31 , quantite : 4 , datePass: new Date("9/10/2024")},
  {codea : 15 , nom : "Poulet rôti"  , prix : 17.5 , quantite : 7 , datePass: new Date("8/11/2024")},
  ];
  }
  ngOnInit(): void { }

  suppCommande(com: Commande) {
    let conf = confirm("Etes-vous sûr de vouloir supprimer cette commande ?");
    if (conf) {
      this.articleService.supprimerCommande(com);
      console.log("Suppression avec succès :" + com.nom);
    }
   
  }

 
      
  }


 
