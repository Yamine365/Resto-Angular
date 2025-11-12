import { Component } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  tab_art : Article[];
  constructor(private articleService: ArticleService) {
this.tab_art = articleService.listeArticles(); [
{codea : 1, libelle : "Souris Wifi", prix : 39.100, qte : 8,
dateAjout : new Date("09/27/2022")},
{codea : 2, libelle : "Clavier Gaming", prix : 45.900, qte :
11, dateAjout : new Date("09/30/2022")},
{codea : 3, libelle : "Manette de jeu", prix : 26, qte : 5,
dateAjout : new Date("10/02/2022") }
];
}

ngOnInit(): void {
}
suppArticle(art: Article){
  let conf = confirm("Etes-vous sûr de vouloir supprimer cet article ?");
  if (conf) {
  this.articleService.supprimerArticle(art);
  console.log("Suppression avec succes :"+art.libelle);
  }
  }
modifArticle(art: Article){
  //let conf = confirm("Etes-vous sûr de vouloir modifier cet article ?");
  //
  //if (conf) {
  //this.articleService.modifierArticle(art);
  //console.log("modification avec succes :"+art.libelle);
  //}
  }

}
