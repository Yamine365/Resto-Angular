import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande.model';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-pass-command',
  templateUrl: './pass-command.component.html',
  styleUrls: ['./pass-command.component.scss']
  
})
export class PassCommandComponent implements OnInit {
  newcommande: Commande = new Commande(
    1,  
    "Spaghetti Bolognese", 
    21.00,  
    8,  
    new Date("09/27/2024"), 
    { codec: 1, nomCat: "Plat principal", description: "Les plats principaux du menu" }
  );
  categories: Categorie[] = [];
  selectedCategory!: number;
  newCodec!: number;

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.articleService.listerCategories();
  }

  passerCommande(): void {
    const selectedCategoryObj = this.categories.find(cat => cat.codec === this.selectedCategory);
    if (selectedCategoryObj) {
      this.newcommande.categ = selectedCategoryObj;
    }
    this.articleService.passerCommande(this.newcommande);
    this.router.navigate(['/commandes']);
  }
}
