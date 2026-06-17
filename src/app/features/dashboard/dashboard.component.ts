import { Component } from '@angular/core';
import { MissionCardComponent } from '../../shared/components/mission-card/mission-card.component';
import { Mission } from '../../shared/models/mission.model';
import { Character } from '../../shared/models/character.model';

@Component({
  selector: 'app-dashboard',
  imports: [MissionCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  missions: Mission[] = [
    {
      icon: 'target', iconColor: 'primary', iconBg: 'bg-primary-fixed',
      title: 'Sharpshooter', description: 'Get 50 headshots in any ranked match.',
      progress: 75, progressLabel: '37/50', reward: '+500 XP'
    },
    {
      icon: 'timer', iconColor: 'secondary', iconBg: 'bg-secondary-fixed',
      title: 'Early Bird', description: 'Win your first match of the day.',
      progress: 0, progressLabel: '0/1', reward: '+200 Credits'
    },
    {
      icon: 'handshake', iconColor: 'tertiary', iconBg: 'bg-tertiary-fixed',
      title: 'Team Player', description: 'Get 20 assists in a single session.',
      progress: 100, progressLabel: '20/20', reward: '+300 XP'
    },
    {
      icon: 'lock', iconColor: 'primary', iconBg: 'bg-surface-container',
      title: 'Night Owl', description: 'Log in after 10 PM local time.',
      progress: 0, progressLabel: '', reward: '',
      locked: true, lockLabel: 'Unlocks in 4h'
    }
  ];

  featuredCharacters: Character[] = [
    {
      name: 'Ghost-X', role: 'Stealth Assassin', element: 'shadow',
      level: 48, stars: 4, maxStars: 5, xpPercent: 65, xpLabel: '65% XP',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjF2_7W_09qTX-JTXIEyqdBz5tmGER5PmERzq9Z2X4Q7el2S0ZfBjBoOrM-JY8I2gL6obz4dJb2ruk0Tyn0aQSJMw5NwgiwTMmG0IBzna9RgiIlRAmxYszvNaYRHk_gWMxhcuR0YOzMwPMlhEw8JOIwUkBudghK98ijEbFbKgPejQRNhn7tOfQwqfapByGc-zx-V66GoGSvSC9CC_XKRfxjPe2-A3hRUznJNF99M21MhRhUr07DV995hX_04ZUf1oSYJjpZvXeqgnn',
      imageAlt: 'Ghost-X character portrait'
    },
    {
      name: 'Ignis', role: 'Elemental Burst', element: 'fire',
      level: 52, stars: 5, maxStars: 5, xpPercent: 45, xpLabel: '45% XP',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAurcUSnmaj0ea4p1rLSyeL71uYa6isggBhN7o1tv7yNi62o6h0dVlkEHddNmrvsjZWyqddqxgk_oxL9j3n8NqGtFfx11pHoD3e2sPB_Q_GDGCgi1kaPAmtoCYro6pNnTZxbKtkzHWZMN2mfigN6bd3SA_G2Oa82vJZJpDwho6Ql_FHjinFRbFVLBnl_5B9CcgEm5FKSWtk_GHqbJcuXBI7izf3QEPnx4DidEjKQYnJudQH8I5qHcoNgduAiOxo7yMNxwsKm-qISe_s',
      imageAlt: 'Ignis character portrait'
    },
    {
      name: 'Cortex', role: 'Tactical Lead', element: 'tactical',
      level: 60, stars: 5, maxStars: 5, xpPercent: 90, xpLabel: '90% XP',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAipqUsLcAymFqcbjmiNTJDm6sr3KzabA4ZCVxRygTFLmj8Xki_EpSSIYkF',
      imageAlt: 'Cortex character portrait'
    }
  ];

  latestNews = [
    {
      category: 'Patch 2.4.0', categoryColor: 'primary',
      title: 'Meta Shift: Why Character Bans are Changing',
      timeAgo: '2 hours ago',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWQ5umloTq69oSvI8XMfu8GXgIrY1AnVJ1AIRKl-UYsciVJhz6Lc4yXaeblOXxEVvN54nMc_htoXiEXfHcBijUgx_03ad6bLasdhV0e8igqwr2F89Gm67HDF2GzYI9qFF_S4osys04rxvSOgcUHmya2Nbeb9td5XEP5uxt3vOBUZZ3ietJpffXuhNpyaFscXeOoFhhl0DNvhQqZZhWtuTOiTRj93N4Xp2b3Ec3NELrIqj_7UvLCrURr-lJPP67ttskFI72wXNlt0tk',
      imageAlt: 'Gaming keyboard'
    },
    {
      category: 'Community', categoryColor: 'secondary',
      title: 'GamerHQ Pro Invitational: Prize Pool Revealed',
      timeAgo: '6 hours ago',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHk_4kbKSizT7p6hfMJRzvep0_J_iu9Wisc2XlPAkWtePSsSY3eHcYbm4ag_jgpeUAFKrLdGHgA79lOU7VlHIIYVJVPB_S5lgPbKYT1dBLphMIDkrxAXOaPL99eZLYLDlmJ5oEh0hfwtinOhFfDjB6gFZg10J8t35bc8fUyagIIACnj8Yj84v5gXEpWW0dvSab0QHrYJUwQplhhlWszdraSs0TzJE5iOca-HX6IMaUYce7tKLCbFH1RNp',
      imageAlt: 'Esports tournament'
    },
    {
      category: 'Updates', categoryColor: 'tertiary',
      title: 'New Map Teaser: The Floating Gardens of Zen',
      timeAgo: 'Yesterday',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6OhC8uNfbD__AC0ujC-yIUWy-tM2HUgaGP6-4XjiXiuEhWnExe66Dtntfbs9GexA6IAfUdAKXoGkNg0KvQ-55AJXv7pD-_BV3KwdsVIRVE6o3U7H8dcAppahDJxjLnogttdJomixQcb9WIH27JgK9lpn5n82YX8UO24Fgw6OpwixUZc4hA1yZ9N7_H-wBr3EfqFKU7hfIqaJ7tcKPci_K5uaAzclI3YijN6c-gtZqW0XJgBOyAHCMCc65f5-C_YQPa658lgWSVVtc',
      imageAlt: 'Game map'
    }
  ];
}
