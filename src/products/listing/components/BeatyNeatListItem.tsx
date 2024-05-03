import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Link, useNavigate} from 'react-router-dom'
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

const Logos = () => {
  return(
  <>
    <Box
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'center'}
      paddingTop={4}
      sx={{
        width: '100%',
      }}
    >
      <Link to="https://apps.apple.com/se/app/beatyneattuner/id6470951462" target="_blank">
        <Box
          id="appstore-link"
          component="img"
          sx={{
            height: { xs: 40, sm: 50 },
            border: 'none',
          }}
          src={`${process.env.PUBLIC_URL}/images/app-ios.svg`}
        />
      </Link>
    </Box>
  </>
)};

export default function ListItem({item}:ListItemProps) {
  const navigate = useNavigate();
  const clicked = (e:any) => {
    if (e.target.getAttribute("id") !== 'appstore-link') {
      navigate(item.path)
    }
  }
  return (

    <Box
      onClick={(e) => clicked(e)}
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% 100%, hsl(-30, 100%, 90%), transparent)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F182B9',
        borderRadius:1,
        boxShadow: '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 0px 22px hsla(210, 100%, 25%, 1.5)'
      })}
    >

        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            height: { xs: 'auto', sm: 'auto', md: 500 },
            pl: { xs: 0, sm: 0, md: 0 },
            pr: { xs: 0, sm: 0, md: 0 },
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            width: '100%',
          }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
              pl:{xs: 2, sm: 2, md: 8},
              pr:{xs: 2, sm: 2, md: 8},
              pt:{xs: 8, sm: 8, md: 0},
            }}
            
          >

            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                mb: { xs: 3, sm: 3 },
                fontSize: {
                  xs: 'clamp(2.5rem, 10vw, 1.5rem)',
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
                textAlign: 'center',
                mb: { xs: 4, sm: 6 },
                fontSize: {
                  xs: 'clamp(1rem, 10vw, 1.0rem)',
                  sm: 'clamp(1.5rem, 10vw, 1.0rem)',
                  md: 'clamp(1.5rem, 10vw, 1.0rem)'
                },
                color: 'white',
              }}
            >
              {item.secondaryTitle}
            </Typography>
            <Box sx={{
              width:'100%',
              display: { xs: 'none', sm: 'none', md:'flex' },
              flexDirection:'column',
              paddingLeft: { xs: 0, sm: 0, md: 0 },
              paddingRight: { xs: 0, sm: 0, md: 0 },
            }}>
              <Logos />
            </Box>
          </Box>

          <Box
            sx={{
              display:'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: { xs: '100%', sm: '100%', md: '100%' },
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: '40%', sm: '40%', md: '40%' },
              }}
              src={`${item.image}`}
            />
            <Box sx={{
              width: '100%',
              display: { xs: 'flex', sm: 'flex', md:'none' },
              flexDirection: 'column',
              paddingTop: { xs: 4, sm: 4, md: 0 },
              paddingBottom: { xs: 4, sm: 4, md: 0 },
              paddingLeft: { xs: 4, sm: 4, md: 0 },
              paddingRight: { xs: 4, sm: 4, md: 0 },
            }}>
              <Logos />
            </Box>
          </Box>
        </Box>
    </Box>
  );
}
