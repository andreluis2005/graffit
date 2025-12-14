import React from 'react';
import { Palette, Zap, Layers, Globe, Twitter, Send, MessageCircle, BarChart3, Radio } from 'lucide-react';
import { Feature, RoadmapPhase, SocialLink } from './types';

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Community', href: '#community' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Street Art',
    description: 'Graffiti is the global language of the voiceless. We are bringing that raw energy on-chain.',
    icon: <Palette className="w-8 h-8 text-neon-green" />,
  },
  {
    id: 2,
    title: 'Built on Base',
    description: 'Leveraging Coinbase’s L2 for lightning fast transactions and practically zero gas fees.',
    icon: <Zap className="w-8 h-8 text-base" />,
  },
  {
    id: 3,
    title: 'Urban Culture',
    description: 'From hip-hop to skate culture, GRAFFIT is the digital currency of the concrete jungle.',
    icon: <Layers className="w-8 h-8 text-neon-purple" />,
  },
  {
    id: 4,
    title: 'Global Community',
    description: 'No borders, no walls. A decentralized collective of artists, holders, and creators.',
    icon: <Globe className="w-8 h-8 text-spray-red" />,
  },
];

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'The Tag',
    items: ['Launch on Base', 'Website V1 Deployment', 'Community Building', 'Initial Marketing Spray'],
  },
  {
    phase: 'Phase 2',
    title: 'The Mural',
    items: ['CoinGecko & CMC Listing', 'Artist Collaborations', 'NFT Drops on Base', '10,000 Holders'],
  },
  {
    phase: 'Phase 3',
    title: 'The City',
    items: ['Real World Street Art Events', 'DAO Governance', 'Merch Store', 'Tier 1 CEX Listings'],
  },
];

export const SOCIALS: SocialLink[] = [
  { name: 'Twitter', href: '#', icon: <Twitter className="w-6 h-6" /> },
  { name: 'Telegram', href: '#', icon: <Send className="w-6 h-6" /> },
  { name: 'Discord', href: '#', icon: <MessageCircle className="w-6 h-6" /> },
  { name: 'Farcaster', href: '#', icon: <Radio className="w-6 h-6" /> },
];

export const TOKENOMICS_DATA = [
  { label: 'Total Supply', value: '1B' },
  { label: 'Tax', value: '0%' },
  { label: 'Liquidity', value: 'BURNT' },
  { label: 'Chain', value: 'BASE' },
];