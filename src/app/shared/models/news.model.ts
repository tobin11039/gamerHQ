export interface NewsArticle {
  category: string;
  categoryColor: 'primary' | 'secondary' | 'tertiary';
  title: string;
  summary: string;
  timeAgo: string;
  imageUrl: string;
  imageAlt: string;
}
