import { Injectable } from '@angular/core';
import { Commande } from '../model/commande.model';
import { Categorie } from '../model/categorie.model'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab_com: Commande[];
  categories: Categorie[];

  constructor(private router: Router) {
    
    this.categories = [
      { codec: 1, nomCat: "Entrée", description: "Plats légers pour commencer le repas" },
      { codec: 2, nomCat: "Plat principal", description: "Les plats principaux du menu" },
      { codec: 3, nomCat: "Dessert", description: "Sucreries pour terminer le repas" },
      { codec: 4, nomCat: "Boisson", description: "Boissons pour accompagner le repas" }
      
    ];

    this.tab_com = [
      { codea: 1, nom: "Spaghetti Bolognese", prix: 21, quantite: 8, datePass: new Date("09/27/2024"), categ: this.categories[0] },
      { codea: 2, nom: "Lasagne fruit de mer", prix: 24.9, quantite: 11, datePass: new Date("09/30/2024"), categ: this.categories[1] },
      { codea: 3, nom: "Tacos", prix: 10, quantite: 5, datePass: new Date("10/02/2024"), categ: this.categories[2] },
      { codea: 4, nom: "Cheeseburger", prix: 11.6, quantite: 10, datePass: new Date("10/11/2024"), categ: this.categories[1] },
      { codea: 5, nom: "Salade César", prix: 17, quantite: 3, datePass: new Date("2/1/2024"), categ: this.categories[0] },
      { codea: 6, nom: "Crêpes", prix: 14, quantite: 13, datePass: new Date("10/2/2024"), categ: this.categories[2] },
      { codea: 7, nom: "Gâteau au chocolat", prix: 8, quantite: 22, datePass: new Date("1/11/2024"), categ: this.categories[0] },
      { codea: 8, nom: "Fish and chips", prix: 20, quantite: 5, datePass: new Date("10/10/2024"), categ: this.categories[1] },
      { codea: 9, nom: "Curry de légumes", prix: 17, quantite: 2, datePass: new Date("6/9/2024"), categ: this.categories[2] },
      { codea: 10, nom: "Soupe à l'oignon", prix: 10, quantite: 1, datePass: new Date("12/7/2024"), categ: this.categories[0] },
      { codea: 11, nom: "Couscous", prix: 15.3, quantite: 30, datePass: new Date("11/4/2024"), categ: this.categories[1] },
      { codea: 12, nom: "Boeuf bourguignon", prix: 15, quantite: 6, datePass: new Date("7/5/2024"), categ: this.categories[2] },
      { codea: 13, nom: "Tarte Tatin", prix: 16, quantite: 9, datePass: new Date("10/12/2024"), categ: this.categories[0] },
      { codea: 14, nom: "Sushi", prix: 31, quantite: 4, datePass: new Date("9/10/2024"), categ: this.categories[1] },
      { codea: 15, nom: "Poulet rôti", prix: 17.5, quantite: 7, datePass: new Date("8/11/2024"), categ: this.categories[2] }
    ];
  }

  listecommande(): Commande[] {
    return this.tab_com;
  }

  passerCommande(com: Commande): void {
    this.tab_com.push(com);
    console.log("Ajout avec succès : " + com.nom);
  }

  supprimerCommande(com: Commande): void {
    const index = this.tab_com.indexOf(com, 0);
    if (index > -1) {
      this.tab_com.splice(index, 1);
    }
  }

  consultercommande(id: number): Commande | null {
    return this.tab_com.find(com => com.codea === id) || null;
  }

  modifiercommande(nva: Commande): void {
    let a = -1;
    for (let i of this.tab_com) {
      if (i.codea == nva.codea) {
        a = this.tab_com.indexOf(i);
      }
    }
    if (a != -1) {
      this.tab_com[a] = nva;
      console.log("Commande modifiée :", nva);
      this.router.navigate(['/commandes']);
    } else {
      console.log("Commande non trouvée, impossible de la modifier.");
    }
  }

  listerCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie | null {
    return this.categories.find(cat => cat.codec === id) || null;
  }
}
