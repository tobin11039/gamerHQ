export interface Character {
  name: string;
  role: string;
  element: 'fire' | 'water' | 'shadow' | 'light' | 'tactical';
  level: number;
  stars: number;
  maxStars: number;
  xpPercent: number;
  xpLabel: string;
  imageUrl: string;
  imageAlt: string;
}
