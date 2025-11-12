import { Categorie } from './categorie.model'; 

export class Commande {
  codea!: number;
  nom!: string;
  prix!: number;
  quantite!: number;
  datePass!: Date;
  categ!: Categorie; 

  constructor(codea: number, nom: string, prix: number, quantite: number, datePass: Date, categ: Categorie) {
    this.codea = codea;
    this.nom = nom;
    this.prix = prix;
    this.quantite = quantite;
    this.datePass = datePass;
    this.categ = categ;
  }
}
