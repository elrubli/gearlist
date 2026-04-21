import BRANDS from './brands';

import type { Brand } from '../types/brand'

export interface Magazine {
  id: string;
  name: string;
  brand: Brand;
  size: string;
  isCoupleable?: boolean;
  url: string;
}

const MAGAZINES: Magazine[] = [
  {
    id: 'CF20',
    name: 'CF20',
    brand: BRANDS.planetEclipse,
    size: '7.62x51',
    isCoupleable: true,
    url: 'https://planeteclipse.com/product/cf20/',
  },
]

export default MAGAZINES;
