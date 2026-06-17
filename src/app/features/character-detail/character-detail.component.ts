import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CharacterService } from '../../shared/services/character.service';
import { CharacterDetailData } from '../../shared/models/character-detail.model';

@Component({
  selector: 'app-character-detail',
  imports: [RouterLink],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})
export class CharacterDetailComponent {
  private route = inject(ActivatedRoute);
  private characterService = inject(CharacterService);

  character = toSignal(
    this.route.paramMap.pipe(
      map(params => this.characterService.findByName(params.get('name') ?? ''))
    )
  );
}
