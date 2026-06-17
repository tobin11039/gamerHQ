import { Injectable } from '@angular/core';
import { CharacterDetailData } from '../models/character-detail.model';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  readonly characters: CharacterDetailData[] = [
    {
      name: 'Astra Nova', role: 'Starlight Executioner', element: 'light',
      level: 60, stars: 5, maxStars: 5, xpPercent: 80, xpLabel: '80% XP',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFV7XIV-6DkpqrB2jIk-LOU-NadXgdtsAFgU1OlXrLe8XGuNl6-bUiEwaqGKob3dw-iEzHMRnY7egfBO-R4VK_4XQ0ZsweAvgP_9VWVPBe4sfSIn2AewKG-0CVv9_YwdzjgvwYYV6sogSYXMH0jF_ZSsC4gqcYH2l1v-B-mYqDfVRxXRw0TvX8ubXBaLZkmZlgmK98aW3EP-OxWTbGGqZkxWWfsMEJxao_w3WVQ9JKu8yYnoPajf2iOQrwnOtexfCvCFyiidMsDc7Z',
      imageAlt: 'Astra Nova — Starlight Executioner',
      subtitle: 'Herald of the Celestial Rift',
      power: '3,200', tier: 'S-Tier',
      tags: [
        { label: 'Legendary', bg: 'bg-primary-container', text: 'text-on-primary-container' },
        { label: 'Executioner', bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
        { label: 'Light Element', bg: 'bg-surface-container-highest', text: 'text-on-surface-variant' }
      ],
      abilities: [
        {
          icon: 'flare', iconFill: true, binding: 'Q Skill', name: 'Starfall',
          description: 'Summons a cascade of starlight that rains down on enemies, dealing 520 AoE damage and reducing their vision.',
          cooldown: '7s Cooldown', mana: '55 Mana',
          colorAccent: 'primary', iconBg: 'bg-primary-fixed', iconColor: 'text-primary'
        },
        {
          icon: 'wb_sunny', iconFill: true, binding: 'W Skill', name: 'Nova Burst',
          description: 'Channels stellar energy into a concentrated beam that pierces through all targets in a straight line for 380 damage.',
          cooldown: '10s Cooldown', mana: '70 Mana',
          colorAccent: 'secondary', iconBg: 'bg-secondary-fixed', iconColor: 'text-secondary'
        },
        {
          icon: 'shield_moon', iconFill: false, binding: 'E Skill', name: 'Light Veil',
          description: 'Wraps an ally in radiant light, granting a shield worth 600 HP and increasing their movement speed by 20% for 4s.',
          cooldown: '18s Cooldown', mana: '90 Mana',
          colorAccent: 'tertiary', iconBg: 'bg-tertiary-fixed', iconColor: 'text-tertiary'
        },
        {
          icon: 'brightness_alert', iconFill: true, binding: 'Ultimate', name: 'Celestial Collapse',
          description: 'Calls down a supernova at a targeted zone, dealing 1,200 true damage and blinding all enemies caught in the blast radius for 3s.',
          cooldown: '90s Cooldown', mana: '280 Mana',
          colorAccent: 'ultimate', iconBg: '', iconColor: ''
        }
      ],
      stats: [
        { label: 'OFFENSE', value: '95%', percent: 95, color: 'bg-primary' },
        { label: 'UTILITY', value: '70%', percent: 70, color: 'bg-secondary' },
        { label: 'DIFFICULTY', value: 'MED', percent: 65, color: 'bg-tertiary' }
      ]
    },
    {
      name: 'Vulkan', role: 'Magma Bastion', element: 'fire',
      level: 58, stars: 4, maxStars: 5, xpPercent: 32, xpLabel: '32% XP',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZjZrEhKx45cKh8LAODB_Gwe4Ype7efpPOe-kvt-FnnogbdgBpF_WjpgrDwyDO-MUVxNuenUyAqXj-K1nauvyzDIieUUFjFjQ4apQTROwi6ItLaH4a6pPoujwieT3_pd4C1VIgKKln7SxRgd1-RnWyDR_vnNzUC1FCS1mEdwbYiHLS_UwZnxp7bdFtoL9PrgjCducgl_DnJx_RF_hpzkbEkFp8zx807EcDTIW0SIRInD5TBssbsUVw7D-Hg2WrlzVmjeolDPdEqnvv',
      imageAlt: 'Vulkan — Magma Bastion',
      subtitle: 'Immovable shield of the molten deep',
      power: '2,600', tier: 'B-Tier',
      tags: [
        { label: 'Epic', bg: 'bg-primary-container', text: 'text-on-primary-container' },
        { label: 'Tank', bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
        { label: 'Fire Element', bg: 'bg-surface-container-highest', text: 'text-on-surface-variant' }
      ],
      abilities: [
        {
          icon: 'local_fire_department', iconFill: true, binding: 'Q Skill', name: 'Magma Shield',
          description: 'Hardens molten rock into an impenetrable barrier, absorbing up to 800 incoming damage for 5 seconds.',
          cooldown: '9s Cooldown', mana: '50 Mana',
          colorAccent: 'primary', iconBg: 'bg-primary-fixed', iconColor: 'text-primary'
        },
        {
          icon: 'whatshot', iconFill: true, binding: 'W Skill', name: 'Eruption Strike',
          description: 'Slams the ground with volcanic force, sending a shockwave that knocks enemies airborne and deals 400 damage.',
          cooldown: '14s Cooldown', mana: '80 Mana',
          colorAccent: 'secondary', iconBg: 'bg-secondary-fixed', iconColor: 'text-secondary'
        },
        {
          icon: 'mode_heat', iconFill: false, binding: 'E Skill', name: 'Lava Trail',
          description: 'Leaves a scorching lava trail as Vulkan charges forward, dealing 60 damage per second to enemies who walk through it.',
          cooldown: '16s Cooldown', mana: '65 Mana',
          colorAccent: 'tertiary', iconBg: 'bg-tertiary-fixed', iconColor: 'text-tertiary'
        },
        {
          icon: 'volcano', iconFill: true, binding: 'Ultimate', name: 'Volcanic Collapse',
          description: 'Triggers a full volcanic eruption at his location, launching lava bombs across the battlefield for 900 total damage over 8 seconds.',
          cooldown: '100s Cooldown', mana: '260 Mana',
          colorAccent: 'ultimate', iconBg: '', iconColor: ''
        }
      ],
      stats: [
        { label: 'OFFENSE', value: '75%', percent: 75, color: 'bg-primary' },
        { label: 'UTILITY', value: '88%', percent: 88, color: 'bg-secondary' },
        { label: 'DIFFICULTY', value: 'LOW', percent: 35, color: 'bg-tertiary' }
      ]
    },
    {
      name: 'Lyra Tide', role: "Ocean's Embrace", element: 'water',
      level: 60, stars: 5, maxStars: 5, xpPercent: 100, xpLabel: 'MAX',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsefBdPtTdgjRVEc777iSJe8m3IVTetPxSs6q-lY7UqFd477DaLEvutMfDLKI0LdzOuLAQ5vT3I576wNAFLZE1qbzVC5kXPcMZgalNAbCt072xblDsWB2vHH0-AZARC0RRSwDDwGT5B7yEEMH8Jt550LxhOMHMLCLhUyDqzSPlbn3j_03q6C_4q8o1dVp33pShb3xLG9LhDNoYtgwWrJ4EtQPF3Qu3qjwGiOfpolYClKLweNZE2E_KX8gw78QyTOwFkXJX9mKPGRHi',
      imageAlt: "Lyra Tide — Ocean's Embrace",
      subtitle: 'Voice of the eternal tides',
      power: '2,900', tier: 'A-Tier',
      tags: [
        { label: 'Legendary', bg: 'bg-primary-container', text: 'text-on-primary-container' },
        { label: 'Support', bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
        { label: 'Water Element', bg: 'bg-surface-container-highest', text: 'text-on-surface-variant' }
      ],
      abilities: [
        {
          icon: 'water', iconFill: true, binding: 'Q Skill', name: 'Tidal Wave',
          description: 'Conjures a powerful wave that surges forward, dealing 350 damage and pushing all enemies back 10 meters.',
          cooldown: '8s Cooldown', mana: '60 Mana',
          colorAccent: 'primary', iconBg: 'bg-primary-fixed', iconColor: 'text-primary'
        },
        {
          icon: 'healing', iconFill: true, binding: 'W Skill', name: 'Healing Surge',
          description: 'Channels cleansing ocean energy into an ally, restoring 450 HP instantly and granting 80 HP regen per second for 5s.',
          cooldown: '12s Cooldown', mana: '75 Mana',
          colorAccent: 'secondary', iconBg: 'bg-secondary-fixed', iconColor: 'text-secondary'
        },
        {
          icon: 'foggy', iconFill: false, binding: 'E Skill', name: 'Mist Form',
          description: 'Dissolves into a mist cloud, becoming untargetable for 2s and leaving a fog zone that obscures enemy vision.',
          cooldown: '22s Cooldown', mana: '100 Mana',
          colorAccent: 'tertiary', iconBg: 'bg-tertiary-fixed', iconColor: 'text-tertiary'
        },
        {
          icon: 'tsunami', iconFill: true, binding: 'Ultimate', name: 'Tidal Fury',
          description: 'Unleashes the full might of the ocean in a colossal wave that engulfs the entire arena, dealing 1,000 damage and stunning enemies for 2.5s.',
          cooldown: '95s Cooldown', mana: '290 Mana',
          colorAccent: 'ultimate', iconBg: '', iconColor: ''
        }
      ],
      stats: [
        { label: 'OFFENSE', value: '60%', percent: 60, color: 'bg-primary' },
        { label: 'UTILITY', value: '98%', percent: 98, color: 'bg-secondary' },
        { label: 'DIFFICULTY', value: 'MED', percent: 55, color: 'bg-tertiary' }
      ]
    },
    {
      name: 'Kaelen', role: 'Void Stalker', element: 'shadow',
      level: 42, stars: 3, maxStars: 5, xpPercent: 50, xpLabel: '50% XP',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxpc1vpdHuNmmp18apCjGo7ewe1FoTtSr7GCuBBPR8SWySuvtDnxz2Q0pzlhH20Bm0oL5itpGZE_qcRn9BX9NYeReoLH7YM6E5xBOyxf4NMm2NmbUpiIqiEeivWY_ELpw-KEKQyEc3wGE9E_DY8opB4_F_311nADZEEB0UQwoNh4fRLzBo3aKdF0trGYxtYXVzHNBIluOFWM_35qEVxxk28fF0D3TRWFTWqolgV6EYTgl9nbsTAafOMbDttyl2yunQHJTBn0JeAtBe',
      imageAlt: 'Kaelen — Void Stalker',
      subtitle: 'Predator lurking between dimensions',
      power: '2,400', tier: 'B-Tier',
      tags: [
        { label: 'Rare', bg: 'bg-primary-container', text: 'text-on-primary-container' },
        { label: 'Assassin', bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
        { label: 'Shadow Element', bg: 'bg-surface-container-highest', text: 'text-on-surface-variant' }
      ],
      abilities: [
        {
          icon: 'directions_run', iconFill: true, binding: 'Q Skill', name: 'Shadow Step',
          description: 'Instantly blinks behind a targeted enemy, dealing 300 backstab damage and applying a 2s silence debuff.',
          cooldown: '10s Cooldown', mana: '65 Mana',
          colorAccent: 'primary', iconBg: 'bg-primary-fixed', iconColor: 'text-primary'
        },
        {
          icon: 'dark_mode', iconFill: true, binding: 'W Skill', name: 'Void Strike',
          description: 'Channels void energy into a single precise strike that bypasses all shields, dealing 480 pure damage to one target.',
          cooldown: '13s Cooldown', mana: '85 Mana',
          colorAccent: 'secondary', iconBg: 'bg-secondary-fixed', iconColor: 'text-secondary'
        },
        {
          icon: 'visibility_off', iconFill: false, binding: 'E Skill', name: 'Dark Veil',
          description: 'Wraps Kaelen in shadow, turning invisible for 4s. Next attack after breaking invisibility deals 50% bonus damage.',
          cooldown: '20s Cooldown', mana: '95 Mana',
          colorAccent: 'tertiary', iconBg: 'bg-tertiary-fixed', iconColor: 'text-tertiary'
        },
        {
          icon: 'blur_on', iconFill: true, binding: 'Ultimate', name: 'Oblivion',
          description: 'Tears open a void rift that consumes all enemies in range, trapping them for 1.5s before dealing 1,100 damage on release.',
          cooldown: '105s Cooldown', mana: '310 Mana',
          colorAccent: 'ultimate', iconBg: '', iconColor: ''
        }
      ],
      stats: [
        { label: 'OFFENSE', value: '90%', percent: 90, color: 'bg-primary' },
        { label: 'UTILITY', value: '65%', percent: 65, color: 'bg-secondary' },
        { label: 'DIFFICULTY', value: 'HIGH', percent: 100, color: 'bg-tertiary' }
      ]
    }
  ];

  findByName(name: string): CharacterDetailData | undefined {
    return this.characters.find(c => c.name === name);
  }
}
