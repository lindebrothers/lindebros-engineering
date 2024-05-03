import * as React from 'react';
import AcordaListItem, {IListItem as AcordaItem} from './listing/components/AcordaListItem';
import BeatyNeatListItem, {IListItem as BeatyNeatItem} from './listing/components/BeatyNeatListItem';


import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

export interface IListItem {
  data: AcordaItem,
  //component: React.ReactNode | Function;
}

export default function ProductsListPage() {
  

  const items:IListItem[] = [
    {
      data: {
        primaryTitle: 'Outstanding digitalized retro organ ',
        secondaryTitle: 'Audio Unit plugin',
        image: `${process.env.PUBLIC_URL}/images/acorda2.png`,
        path: '/acorda',
        imageHeight: { xs: 200, sm: 400 },
      },
    },
    {
      data: {
        primaryTitle: 'BeatyNeat Tuner',
        secondaryTitle: 'IOS App',
        image: `${process.env.PUBLIC_URL}/images/beatyneatListItem.png`,
        path: '/beatyneat',
        imageHeight: { xs: 200, sm: 400 },
      },
    }


  ]

  return (
    <Box
      id={`productList`}
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
        cursor: 'pointer'
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 20, sm: 20 },
          pb: { xs: 0, sm: 0 },
          pl: { xs: 0, sm: 0 },
          pr: { xs: 0, sm: 0 },
          //backgroundColor:'green'
        }}
      >
        <Box sx={{width:'100%'}}>
          <AcordaListItem item={items[0].data} />
        </Box>
        <Box sx={{width:'100%', pt:8}}>
          <BeatyNeatListItem item={items[1].data} />
        </Box>
      </Container>
    </Box>
  );
}