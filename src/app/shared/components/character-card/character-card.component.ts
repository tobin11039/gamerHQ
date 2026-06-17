import { Component, input } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-card',
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  character = input.required<Character>();

  get starsArray() {
    return Array(this.character().maxStars).fill(0).map((_, i) => i < this.character().stars);
  }
}
