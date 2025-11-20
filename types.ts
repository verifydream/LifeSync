import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  recommended?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  gridArea: string; // e.g., 'col-span-2'
  bgClass: string;
  imgSrc?: string;
}