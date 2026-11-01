import type { TopicTone } from '@/content/topics/types';

export interface ToneClasses {
  iconGradient: string;
  iconSoft: string;
  card: string;
  text: string;
  surface: string;
  dot: string;
}

export const toneClasses: Record<TopicTone, ToneClasses> = {
  primary: {
    iconGradient: 'from-primary-500 to-primary-600',
    iconSoft: 'bg-primary-100 text-primary-600',
    card: 'border-primary-100 hover:border-primary-300',
    text: 'text-primary-700',
    surface: 'bg-primary-50 border-primary-200',
    dot: 'bg-primary-500',
  },
  secondary: {
    iconGradient: 'from-secondary-500 to-secondary-600',
    iconSoft: 'bg-secondary-100 text-secondary-600',
    card: 'border-secondary-100 hover:border-secondary-300',
    text: 'text-secondary-700',
    surface: 'bg-secondary-50 border-secondary-200',
    dot: 'bg-secondary-500',
  },
  accent: {
    iconGradient: 'from-accent-500 to-accent-600',
    iconSoft: 'bg-accent-100 text-accent-600',
    card: 'border-accent-100 hover:border-accent-300',
    text: 'text-accent-700',
    surface: 'bg-accent-50 border-accent-200',
    dot: 'bg-accent-500',
  },
  success: {
    iconGradient: 'from-success-500 to-success-600',
    iconSoft: 'bg-success-100 text-success-600',
    card: 'border-success-100 hover:border-success-300',
    text: 'text-success-700',
    surface: 'bg-success-50 border-success-200',
    dot: 'bg-success-500',
  },
  warning: {
    iconGradient: 'from-warning-500 to-warning-600',
    iconSoft: 'bg-warning-100 text-warning-700',
    card: 'border-warning-100 hover:border-warning-300',
    text: 'text-warning-700',
    surface: 'bg-warning-50 border-warning-200',
    dot: 'bg-warning-500',
  },
};
