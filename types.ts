import React from 'react';

export enum SportType {
  FOOTBALL = 'Football',
  PADEL = 'Padel',
  TENNIS = 'Tennis',
  BASKETBALL = 'Basketball',
  BADMINTON = 'Badminton',
  PICKLEBALL = 'Pickleball',
  SQUASH = 'Squash',
  VOLLEYBALL = 'Volleyball',
  OTHER = 'Other'
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SignupFormData {
  email: string;
  sport: SportType | '';
}

export enum Language {
  EN = 'EN',
  ES = 'ES'
}