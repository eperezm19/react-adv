import React from 'react';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components';
import '../styles/styles-custom.css';

const product = {
  id: 'ADSDS',
  title: 'Coffe - Mug m1',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product} className='bg-dark'>
          <ProductCard.Image className='custom-images' />
          <ProductCard.Title className='text-white' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark'>
          <ProductImage className='custom-images' />
          <ProductTitle className='text-white' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#e44',
          }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
