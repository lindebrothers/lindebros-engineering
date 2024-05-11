import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
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
          pt: { xs: 14, sm: 20 },
          pb: { xs: 0, sm: 0 },
          pl: { xs: 8, sm: 12 },
          pr: { xs: 8, sm: 12 },
          mb: { xs: 6, sm: 0 },
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent={'center'}
          textAlign={'center'}
          useFlexGap
          sx={{ width: { xs: '100%', sm: '100%' } }}
        >
          <Stack
            spacing={2}
            alignItems="center"
            justifyContent={'center'}
            textAlign={'center'}
            useFlexGap
            flexDirection={'row'}
            sx={{
              width: { xs: '100%', sm: '50%' }
            }}
          >
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/images/acorda-icon.png`}
              sx={(theme) => ({
                height: { xs: 50, sm: 110 },
                backdropFilter: 'blur(24px)',
                border: '0.5px solid',
                borderColor: 'rgba(255,255,255,0.5)',
                boxShadow: theme.palette.mode === 'light'
                ? '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)'
                : '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 0px 22px hsla(210, 100%, 25%, 1.5)',
                borderRadius: { xs: 1, sm: 2 },
              })}
            />
            <Box
              component="img"
              sx={{
                height: { xs: 50, sm: 70 },
              }}
              src={AcordaLogo}
            />
          </Stack>
          <Box
                component="img"
                sx={{
                  height: { xs: 200, sm: 320 },
                }}
                src={`${process.env.PUBLIC_URL}/images/product-pic-4.png`}
              />
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: { xs: 'clamp(3rem, 10vw, 3.5rem)', sm: 'clamp(3rem, 10vw, 4.5rem)' },
              color: (theme) =>
                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
            }}
          >
            Fantastic retro sounding organ
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            Imagine the ethereal sounds of an ancient organ, meticulously sampled and digitised to perfection. Now, picture that same transcendent experience at your fingertips, seamlessly integrated into your favorite music production software like Logic Pro, MainStage or GarageBand. 
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
          Acorda isn't just another plugin – it's a masterpiece crafted by musicians, for musicians. Whether you're composing your next chart-topping hit or simply exploring your creative boundaries, Acorda delivers unparalleled quality and versatility.
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
          With both AUv3 plugin compatibility and a standalone app option, you have the freedom to create wherever inspiration strikes. Just plug in your MIDI keyboard, open Acorda. Only your imagination is your limitation.
          </Typography>





          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            useFlexGap
            sx={{ pt: 2, mb: 4, width: { xs: 'auto', sm: 'auto' } }}
          >
              <Box
                component="img"
                sx={{
                  height: { xs: 40, sm: 50 },
                }}
                src={`${process.env.PUBLIC_URL}/images/au-icon.png`}
              />
              <Box
                component="img"
                sx={{
                  height: { xs: 40, sm: 50 },
                }}
                src={`${process.env.PUBLIC_URL}/images/midi-icon.png`}
              />
          </Stack>


          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Link
              href="https://apps.apple.com/se/app/acorda/id6499473804?l=en-GB&mt=12"
              underline="none"
            >
              <Box
                component="img"
                sx={{
                  height: { xs: 40, sm: 50 },
                }}
                src={`${process.env.PUBLIC_URL}/images/app-ios.svg`}
              />
            </Link>
          </Stack>
        </Stack>
        <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ pt: 4, width: { sm: '100%', md: '80%' } }}
          >
            Buy now and get a good start up price.
          </Typography>
      </Container>
    </Box>
  );
}
