import { Character } from './character.model';

export interface CharacterAbility {
  icon: string;
  iconFill: boolean;
  binding: string;
  name: string;
  description: string;
  cooldown: string;
  mana: string;
  colorAccent: 'primary' | 'secondary' | 'tertiary' | 'ultimate';
  iconBg: string;
  iconColor: string;
}

export interface CharacterStatBar {
  label: string;
  value: string;
  percent: number;
  color: string;
}

export interface CharacterTag {
  label: string;
  bg: string;
  text: string;
}

export interface CharacterDetailData extends Character {
  subtitle: string;
  power: string;
  tier: string;
  tags: CharacterTag[];
  abilities: CharacterAbility[];
  stats: CharacterStatBar[];
}
