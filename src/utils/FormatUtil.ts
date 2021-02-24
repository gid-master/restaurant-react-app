import { SyntheticEvent } from 'react';

export const formatCurrency = (value: number): string => {
  const val = (value / 1).toFixed(2).replace('.', ',');
  return `US$${  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

export const formatCapitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export const formatDynamicImage = (image: string): string => {
  const isMockEnabled = Boolean(process.env.REACT_APP_BACKEND_TARGET === 'mock');

  if (isMockEnabled) {
    return require(`@/assets/dishes/${image.split('/').pop()}`).default;
  }

  return `${process.env.REACT_APP_API}/${image}`;
};

export const formatImageFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = require('@/assets/fallback.png').default;
}