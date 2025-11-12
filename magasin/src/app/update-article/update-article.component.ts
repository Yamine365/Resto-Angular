import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {

  articleCourant: Article = new Article();
  //categories: Categorie[] = [];
  codecModifie: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const articleId = this.activatedRoute.snapshot.params['id'];
    this.articleCourant = this.articleService.consulterArticle(articleId);
    
    if (!this.articleCourant) {
      console.error('Article introuvable');
      return;
    }
  }
    //this.categories = this.articleService.listerCategories();
  
   // if (this.articleCourant.categ) {
     // this.codecModifie = this.articleCourant.categ.codec;
    //}
  
  

  modifArticle(): void {
    if (this.codecModifie) {
     // this.articleCourant.categ = this.categories.find(cat => cat.codec === this.codecModifie);
      this.articleService.modifierArticle(this.articleCourant);
      this.router.navigate(['articles']);
    }
  }
}
