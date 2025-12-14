import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}