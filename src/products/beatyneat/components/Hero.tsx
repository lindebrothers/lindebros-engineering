import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AcordaLogo from './acordaLogo.svg';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)'
            : 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          pt: { xs: 20, sm: 20 },
          pb: { xs: 0, sm: 0 },
          pl: { xs: 0, sm: 0 },
          pr: { xs: 0, sm: 0 },
        }}
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
            width: '100%',
            backgroundImage:
              'radial-gradient(ellipse 80% 30% at 50% 100%, hsl(210, 100%, 26%), transparent)',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
              sx={{

              }}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
            >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              mb: { xs: 4, sm: 6 },
              fontSize: {
                xs: 'clamp(1rem, 10vw, 1.8rem)',
                sm: 'clamp(2.5rem, 10vw, 3rem)',
                md: 'clamp(3rem, 10vw, 4.5rem)'
              },
              color: 'primary.light',
            }}
          >
            BeatyNeat Tuner
          </Typography>
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              mb: { xs: 1, sm: 1 },
              fontSize: {
                xs: 'clamp(0.5rem, 10vw, 0.8rem)',
                sm: 'clamp(1rem, 10vw, 0.9rem)',
                md: 'clamp(1.5rem, 10vw, 1.0rem)'
              },
            }}
          >
            Fantastic performing tuner for free.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: {
                xs: 'clamp(0.5rem, 10vw, 0.8rem)',
                sm: 'clamp(1rem, 10vw, 0.9rem)',
                md: 'clamp(1.5rem, 10vw, 1.0rem)'
              },
            }}
          >
            Super simple interface. No bullshit. Just a tuner.
          </Typography>
          <Box
            sx={{
              mt: { xs: 2, sm: 6 },
              mb: { xs: 2, sm: 6 },
            }}
          >
            <Link to="https://apps.apple.com/se/app/beatyneattuner/id6470951462" target="_blank">
              <Box
                component="img"
                sx={{

                  height: { xs: 40, sm: 50 },
                }}
                src={`${process.env.PUBLIC_URL}/images/app-ios.svg`}
              />
            </Link>
          </Box>
          </Box>
          </Box>
          <Box
            component="img"
            sx={{
              height: { xs: 300, sm: 500 },
            }}
            src={`${process.env.PUBLIC_URL}/images/beatyneat-product2.png`}
          />
        </Box>

      </Container>
    </Box>
  );
}
