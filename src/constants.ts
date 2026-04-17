import { Service, Course, Ebook, Remedy, Testimonial } from './types';

export const INITIAL_SERVICES: Service[] = [
  {
    id: 'tarot',
    title: 'Tarot Reading',
    description: 'Deep insights into your past, present, and future through the ancient art of Tarot.',
    price: 999,
    icon: 'Cards',
    enabled: true,
  },
  {
    id: 'numerology',
    title: 'Numerology Report',
    description: 'Discover the hidden meaning of numbers in your life and their impact on your destiny.',
    price: 1499,
    icon: 'Hash',
    enabled: true,
  },
  {
    id: 'vedic-numerology',
    title: 'Vedic Numerology',
    description: 'Ancient Indian wisdom combined with numerical analysis for profound life guidance.',
    price: 1999,
    icon: 'Star',
    enabled: true,
  },
  {
    id: 'psychic-reading',
    title: 'Psychic Reading',
    description: 'Intuitive guidance to help you navigate life\'s challenges and find your true path.',
    price: 1299,
    icon: 'Eye',
    enabled: true,
  },
  {
    id: 'losso-grade',
    title: 'Losso Grade Analysis',
    description: 'Detailed analysis of your life cycles and planetary influences.',
    price: 999,
    icon: 'Compass',
    enabled: true,
  },
  {
    id: 'remedies',
    title: 'Remedies Consultation',
    description: 'Spiritual solutions and rituals to overcome obstacles in love, career, and health.',
    price: 799,
    icon: 'Sparkles',
    enabled: true,
  },
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'tarot-course',
    title: 'Tarot Course',
    description: 'Master the art of reading Tarot cards from beginner to professional level.',
    price: 4999,
    whatsappLink: 'https://wa.me/918249257255',
  },
  {
    id: 'numerology-course',
    title: 'Numerology Course',
    description: 'Learn the secrets of numbers and how to create detailed numerology reports.',
    price: 5999,
    whatsappLink: 'https://wa.me/918249257255',
  },
  {
    id: 'aakarshak-record',
    title: 'Aakarshak Record Course',
    description: 'Unlock the power of attraction and manifestation through spiritual records.',
    price: 3999,
    whatsappLink: 'https://wa.me/918249257255',
  },
  {
    id: 'face-reading',
    title: 'Face Reading Course',
    description: 'Learn to read personalities and destinies through facial features.',
    price: 2999,
    whatsappLink: 'https://wa.me/918249257255',
  },
  {
    id: 'psychic-healing',
    title: 'Psychic Healing Course',
    description: 'Develop your intuitive healing abilities to help yourself and others.',
    price: 6999,
    whatsappLink: 'https://wa.me/918249257255',
  },
];

export const INITIAL_EBOOKS: Ebook[] = [
  {
    id: 'tarot-guide',
    title: 'Tarot Learning Guide',
    description: 'A comprehensive guide to understanding Tarot symbols and spreads.',
    price: 499,
    buyLink: '#',
  },
  {
    id: 'numerology-guide',
    title: 'Complete Numerology Guide',
    description: 'Everything you need to know about numbers and their vibrations.',
    price: 599,
    buyLink: '#',
  },
  {
    id: 'vedic-secrets',
    title: 'Vedic Numerology Secrets',
    description: 'Hidden wisdom from ancient Vedic texts on numerical patterns.',
    price: 699,
    buyLink: '#',
  },
  {
    id: 'psychic-dev',
    title: 'Psychic Development Guide',
    description: 'Exercises and techniques to awaken your inner psychic abilities.',
    price: 449,
    buyLink: '#',
  },
];

export const INITIAL_REMEDIES: Remedy[] = [
  {
    id: 'love-remedy-1',
    title: 'Love Attraction Ritual',
    category: 'love',
    description: 'A powerful ritual to attract your soulmate and harmonize relationships.',
    icon: 'Heart',
  },
  {
    id: 'career-remedy-1',
    title: 'Career Growth Mantra',
    category: 'career',
    description: 'Specific mantras and practices to accelerate your professional progress.',
    icon: 'Briefcase',
  },
  {
    id: 'finance-remedy-1',
    title: 'Wealth Abundance Practice',
    category: 'finance',
    description: 'Spiritual techniques to remove financial blocks and attract prosperity.',
    icon: 'Coins',
  },
  {
    id: 'health-remedy-1',
    title: 'Vitality Healing',
    category: 'health',
    description: 'Energy healing practices to restore balance and physical well-being.',
    icon: 'Activity',
  },
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali M.',
    text: 'Soumith\'s tarot reading was incredibly accurate. It gave me the clarity I needed for my career transition.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Vikram R.',
    text: 'The numerology report was a eye-opener. I finally understand my life patterns better.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sarah J.',
    text: 'Highly recommend the psychic healing course. It changed my perspective on energy work.',
    rating: 4,
  },
];
