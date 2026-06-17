export interface Mission {
  icon: string;
  iconColor: 'primary' | 'secondary' | 'tertiary';
  iconBg: string;
  title: string;
  description: string;
  progress: number;
  progressLabel: string;
  reward: string;
  locked?: boolean;
  lockLabel?: string;
}
