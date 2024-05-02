import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {useNavigate} from 'react-router-dom'
import Typography from '@mui/material/Typography';

export interface IListItem {
  primaryTitle: string;
  secondaryTitle: string;
  image: string;
  path: string;
  imageHeight?: { xs: number, sm: number },
}
export interface ListItemProps {
  item:IListItem;
  onClick?: Function;
}

export default function ListItem({item}:ListItemProps) {
  const navigate = useNavigate();
  return (

    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          'radial-gradient(ellipse 80% 20% at 50% 100%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >

        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            height: { xs: 350, sm: 500 },
            pl: { xs: 3, sm: 4, md: 0 },
            pr: { xs: 3, sm: 4, md: 0 },
            backgroundColor:'red',
            width: '100%',
          }}
        >
          <Box sx={{width:'100%'}}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              padding={10}
            >
              <Typography
                variant="h1"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  mb: { xs: 0, sm: 1 },
                  fontSize: {
                    xs: 'clamp(1rem, 10vw, 0.8rem)',
                    sm: 'clamp(2.5rem, 10vw, 1.5rem)',
                    md: 'clamp(3rem, 10vw, 2.5rem)'
                  },
                  color: 'white',
                }}
              >
                {item.primaryTitle}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  mb: { xs: 4, sm: 6 },
                  fontSize: {
                    xs: 'clamp(0.3rem, 10vw, 0.3rem)',
                    sm: 'clamp(1.5rem, 10vw, 1.0rem)',
                    md: 'clamp(1rem, 10vw, 1.0rem)'
                  },
                  color: 'white',
                }}
              >
                {item.secondaryTitle}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              //backgroundColor:'yellow'
            }}
          >
            <Box
              component="img"
              sx={{
                height: item.imageHeight ? item.imageHeight : { xs: 300, sm: 500 },
              }}
              src={`${item.image}`}
            />
          </Box>
        </Box>
    </Box>
  );
}
