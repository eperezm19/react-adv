import React, { useState } from 'react';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import { Product } from '../interfaces/interfacesProducts';
import '../styles/styles-custom.css';

const product1 = {
  id: 'ADSDS',
  title: 'Coffe - Mug m1',
  img: './coffee-mug.png',
};
const product2 = {
  id: 'Producto 2',
  title: 'Coffe - Mug m2',
  img: './coffee-mug2.png',
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  /**
   * <> generico
   * {} objeto
   * [key:string] sintaxis para especificar x cantidad
   * {[key:string]}: ProductInCart especificamos el tipo del objeto
   * asi se ve el objeto
   * {'1': ...product1, count: 10}
   */
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark'
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className='custom-images' />
            <ProductTitle className='text-white' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
      <div className='shopping-card'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='bg-dark'
            style={{ width: '100px' }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className='custom-images' />
            <ProductTitle className='text-white' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
