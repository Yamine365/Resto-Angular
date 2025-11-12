import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Commande } from '../model/commande.model';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.scss']
})
export class UpdateCommandeComponent implements OnInit {
  CommandeCourant!: Commande;
  categories!: Categorie[];
  codecModifie!: number;

  constructor(private a: ArticleService, private b: ActivatedRoute, private router: Router) {}

  modifcommande(): void {
    console.log('CommandeCourant avant modification:', this.CommandeCourant);
    console.log('Categories:', this.categories);
    console.log('codecModifie:', this.codecModifie);

    if (this.CommandeCourant && this.categories && this.codecModifie !== undefined) {
      this.categories.forEach((cat) => {
        console.log(`Categorie codec: ${cat.codec}`);
      });

      const selectedCategory = this.categories.find(cat => Number(cat.codec) === Number(this.codecModifie));

      if (selectedCategory) {
        this.CommandeCourant.categ = selectedCategory;
        console.log('Catégorie mise à jour:', this.CommandeCourant.categ);
        this.a.modifiercommande(this.CommandeCourant);
        this.router.navigate(['/commandes']);
      } else {
        console.error('Catégorie non trouvée pour codec:', this.codecModifie);
      }
    } else {
      console.error('CommandeCourant, catégories ou codecModifie non définis');
    }
  }

  ngOnInit(): void {
    this.categories = this.a.listerCategories();
    console.log('Catégories chargées:', this.categories);

    this.b.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      console.log("ID reçu :", id);

      if (id) {
        const commande = this.a.consultercommande(Number(id));
        if (commande) {
          console.log("Commande trouvée :", commande);
          this.CommandeCourant = commande;
          this.codecModifie = commande.categ.codec;
          console.log('codecModifie:', this.codecModifie);
        } else {
          console.error("Commande non trouvée pour l'ID :", id);
        }
      }
    });
  }

  listerCategories(): Categorie[] {
    return this.categories;
  }
}
