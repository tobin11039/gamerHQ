import { Component, input } from '@angular/core';
import { Mission } from '../../models/mission.model';

@Component({
  selector: 'app-mission-card',
  imports: [],
  templateUrl: './mission-card.component.html',
  styleUrl: './mission-card.component.css'
})
export class MissionCardComponent {
  mission = input.required<Mission>();
}
