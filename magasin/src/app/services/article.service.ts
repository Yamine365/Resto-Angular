import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab_art : Article[];
  constructor() { 
    this.tab_art = [
      {codea : 1, libelle : "Souris Wifi", prix : 39.100, qte : 8,
      dateAjout : new Date("09/27/2022")},
      {codea : 2, libelle : "Clavier Gaming", prix : 45.900, qte : 11,
      dateAjout : new Date("09/30/2022")},
      {codea : 3, libelle : "Manette de jeu", prix : 26,qte : 5, 
      dateAjout : new Date("10/02/2022")}
      ];
      }

      ajouterArticle(art: Article){
        this.tab_art.push(art);
        console.log("Ajout avec succes : "+art.libelle);
        }
        supprimerArticle(art: Article){
          const index = this.tab_art.indexOf(art, 0);
          if (index > -1) {
          this.tab_art.splice(index, 1);
          }
          }
          consulterArticle(id: number): Article {
            const article = this.tab_art.find(article => article.codea === id);
            console.log('Article trouvé:', article);
            return article as Article;
          }
          
          
          modifierArticle(updatedArticle: Article): void {
            const index = this.tab_art.findIndex(article => article.codea === updatedArticle.codea);
            if (index !== -1) {
              this.tab_art[index] = updatedArticle;
            }
          }
          
          

            
      
      
      listeArticles():Article[] {
      return this.tab_art;
      

  }
}
