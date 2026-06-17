import { Component, input } from '@angular/core';
import { NewsArticle } from '../../models/news.model';

@Component({
  selector: 'app-news-card',
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  article = input.required<NewsArticle>();
}
