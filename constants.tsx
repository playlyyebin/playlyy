import React from 'react';
import { Brain, MapPin, Gift } from 'lucide-react';
import { FeatureItem, SportType } from './types';

export const SPORTS_LIST = [
  { label: 'Football / Soccer', value: SportType.FOOTBALL },
  { label: 'Padel', value: SportType.PADEL },
  { label: 'Tennis', value: SportType.TENNIS },
  { label: 'Basketball', value: SportType.BASKETBALL },
  { label: 'Badminton', value: SportType.BADMINTON },
  { label: 'Pickleball', value: SportType.PICKLEBALL },
  { label: 'Squash', value: SportType.SQUASH },
  { label: 'Other', value: SportType.OTHER },
];

// 🚀 GOOGLE APPS SCRIPT INTEGRATION:
// 1. Deploy your Google Apps Script as a Web App.
// 2. Set "Who has access" to "Anyone".
// 3. Paste the 'Current web app URL' below.
// Example: 'https://script.google.com/macros/s/AKfycbx.../exec'
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxxxxxxxxxxx/exec'; 

export const FEATURES: FeatureItem[] = [
  {
    id: 'be-first',
    title: 'Be first to try Playlyy',
    description: 'Experience the future of AI-powered sports booking before anyone else.',
    icon: <Brain className="w-8 h-8 text-playlyy-blue" />,
  },
  {
    id: 'get-notified',
    title: 'Get notified when we launch',
    description: 'We’ll alert you the moment Playlyy courts become available in your city.',
    icon: <MapPin className="w-8 h-8 text-playlyy-blue" />,
  },
  {
    id: 'exclusive-perks',
    title: 'Exclusive perks for early users',
    description: 'Founding members get special discounts and priority booking status.',
    icon: <Gift className="w-8 h-8 text-playlyy-blue" />,
  },
];