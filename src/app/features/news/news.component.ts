import { Component, signal } from '@angular/core';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';
import { NewsArticle } from '../../shared/models/news.model';

@Component({
  selector: 'app-news',
  imports: [NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  activeCategory = signal('All Stories');

  categories = ['All Stories', 'Updates', 'Events', 'Esports', 'Patch Notes', 'Guides'];

  articles: NewsArticle[] = [
    {
      category: 'Hardware', categoryColor: 'secondary',
      title: 'The Evolution of Peripheral Speed: Polling Rates Explained',
      summary: 'Does 8000Hz actually make you better? We test the latest professional gear to find the sweet spot for elite performance.',
      timeAgo: 'Yesterday',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmre3iZNZNHCxaBWO6SMH5UeIPFK559q4_nkgcJjt9vl32Ytq0crrwZS8JU9RFMxDyVK9uygcZdfkHnr4KjQpsLXZK9ilyUcMNQTDl8I6XVttyIYSfjqH5zaRp_dWP8bhd-sPc1E82mtTmOjrIuVyoKVVe0oAhzwDbufwmP-CuaqCCOw3vO5uC0SsaeDAR8mYlkESkx52rFrV2AZRtWuORaaKeWc7emXP0_Gqp6QuBNarTP6JBFOF-kbL0Wb5dP9MfAykW',
      imageAlt: 'Gaming keyboard'
    },
    {
      category: 'Esports', categoryColor: 'primary',
      title: 'Team Apex Secures Historic Double-Crown Victory',
      summary: 'Relive the final moments of the Summer Split where strategy and pure mechanical skill collided in a record-breaking grand final.',
      timeAgo: '2 days ago',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAxxgeQbSKAVnT3Hfc9jUEr4FDWJFwZbYXcs5A97mu6RyTLHBrFCL_4hClb9ZWp0Vo-PciSxstwGf8mZfTtKS8qTmV7T_lbD1dnpMm4mgpU-icV77m375XmkXSq8aefvvWeuTBs9ZDCOzc-9mbRvdeBi01sZZjgR-D4bQJtC1AQgTvpOJVmh6R7XaoH_frW9_OTjm0QSD2xSoHDqjCB7Ssce7FHi_i5BjgMVS-UMK1r0151mWsrMgimJPLweo6OtgAkYgL21EIfZAz',
      imageAlt: 'Esports team'
    },
    {
      category: 'Development', categoryColor: 'tertiary',
      title: 'Engine Upgrade: Why Reactive Physics is the Future',
      summary: 'Our lead developers explain how the new physics engine will change environmental interactions in competitive modes.',
      timeAgo: '3 days ago',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA6G8Kawioh74fWwqoUHIU6Cpgs6bi5P5A61smiRM0tZrx4Hb7oU-KQOZYPwdM60cSEzMykWVHXpGSQe1X-10Wn5W3Sdehinq3sW4MXBH8X22KXzXsHnPQla7RIAf-HgqCgWw_5_hnL-oHJTfV9I5oHIqN4JALdEzf7G1NjFk3tAzSg5eG162WNvJqaicB9F3xWbNwPqNlOCOeS9XaXHqh_v9V2KznmujI9us2qx_I1yyJMLtJZfTwFaQLQwZADL4gXs9GHEaD4WKP',
      imageAlt: 'Developer workspace'
    }
  ];

  trendingTopics = [
    { rank: '01', title: 'Meta Report: The Rise of Controllers', views: '12k views' },
    { rank: '02', title: 'Top 10 Clips from the Open Qualifier', views: '9.5k views' },
    { rank: '03', title: "New Map 'Prism' Leak Analysis", views: '8.1k views' }
  ];

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}
