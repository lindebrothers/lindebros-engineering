import * as React from 'react';
import ProductListItem, {IListItem} from './listing/components/ProductListItem';


import Divider from '@mui/material/Divider';

export default function ProductsListPage() {
  

  const items:IListItem[] = [
    {
      primaryTitle: 'Acorda',
      secondaryTitle: 'Audio Unit plugin',
      image: `${process.env.PUBLIC_URL}/images/product-item-list-acorda.png`,
      path: '/acorda',
      imageHeight: { xs: 200, sm: 400 }
    },
    {
      primaryTitle: 'BeatyNeat Tuner',
      secondaryTitle: 'IOS App',
      image: `${process.env.PUBLIC_URL}/images/beatyneat-product2.png`,
      path: '/beatyneat',
      imageHeight: { xs: 200, sm: 400 }
    }
  ]

  return (
    <>
      {items.map((item,i)=>(
        <>
          <ProductListItem item={item} key={`whatever-${i}`} />
          <Divider sx={{ pt:4, pb:4 }} />
        </>
      ))}
    </>
  );
}