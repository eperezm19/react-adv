import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductTitleProps } from '../interfaces/interfacesProducts';
import { ProductContext } from './ProductCard';

export const ProductTitle = ({ title }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
