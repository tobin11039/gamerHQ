import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { CharacterService } from '../../shared/services/character.service';

@Component({
  selector: 'app-characters',
  imports: [CharacterCardComponent, RouterLink],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  private characterService = inject(CharacterService);
  sortBy = signal('Highest Power');
  characters = this.characterService.characters;
}
