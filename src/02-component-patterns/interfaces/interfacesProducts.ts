import { ReactElement } from 'react';
import { Props as ProductCard } from '../components/ProductCard';
import { Props as ProductTitle } from '../components/ProductTitle';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCard): JSX.Element;
  Title: ({ title }: ProductTitle) => JSX.Element;
  Image: ({ img }: { img?: string | undefined }) => JSX.Element;
  Buttons: () => JSX.Element;
}
