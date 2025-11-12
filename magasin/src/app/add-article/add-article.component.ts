import { Component } from '@angular/core';
import { Article } from '../model/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss'
})
export class AddArticleComponent {
  newArticle = new Article();
  constructor(private articleService: ArticleService ) { }
addArticle(){
this.articleService.ajouterArticle(this.newArticle);
}
ngOnInit(): void {
}

}
