import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';


export default function SubSellers() {
  return (
    <Container
      id="subSellers"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid
            xs={12}
            md={4}
          >
            <Box
              sx={{ paddingRight: { md: 0, lg: 8 },mb: { xs: 10, lg: 0 }}}
              textAlign="center"
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <MusicNoteIcon
                 
                  sx={{
                    height: { xs: 60, sm: 60 },
                  }}
                  
                />
              </Box>
              <Typography component="h3" variant="h5">
                High performance
              </Typography>
              <Divider
                sx={{
                  my: 2,
                  opacity: 0.8,
                  borderColor: 'divider',
                }}
              />
              <Typography
                variant="subtitle2"
                component={'span'}
                textAlign="center"
              >
                Using your iPhones mic. Compatible with Guitar and Bass Guitar.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={4} >
            <Box sx={{
                pr: { xs: 0, lg: 0 },
                mb: { xs: 10, lg: 0 },
              }}
              textAlign="center"
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <AccessibilityIcon
                  sx={{ height: { xs: 60, sm: 60 }}}
                />
              </Box>
              <Typography component="h3" variant="h5">
                Simple to use
              </Typography>
              <Divider
                sx={{
                  my: 2,
                  opacity: 0.8,
                  borderColor: 'divider',
                }}
              />
              <Typography
                variant="subtitle2"
                component={'span'}
              >
                Super simple and neat design makes it easy to use. Just turn on the button.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={4} >
            <Box sx={{pl: { md: 0, lg: 8 }, mb: { xs: 10, lg: 0 }}} textAlign="center">
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <MoneyOffIcon
                  sx={{
                    height: { xs: 60, sm: 60 },
                  }}
                />
              </Box>
              <Typography component="h3" variant="h5" textAlign="center">
                No banners and tracking
              </Typography>
              <Divider
                sx={{
                  my: 2,
                  opacity: 0.8,
                  borderColor: 'divider',
                }}
              />
              <Typography
                variant="subtitle2"
                component={'span'}
              >
                We hate banners in tools. So no banners. And no tracking. Just a tuner. 
              </Typography>
            </Box>
          </Grid>
      </Grid>
    </Container>
  );
}
