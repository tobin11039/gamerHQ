import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CharactersComponent } from './features/characters/characters.component';
import { NewsComponent } from './features/news/news.component';
import { CharacterDetailComponent } from './features/character-detail/character-detail.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:name', component: CharacterDetailComponent },
  { path: 'news', component: NewsComponent },
  { path: '**', redirectTo: '' }
];
