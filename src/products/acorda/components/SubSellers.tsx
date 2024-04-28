import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function SubSellers() {
  return (
    <Container
      id="subSellers"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 0 },
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
                <Box
                  component="img"
                  sx={{
                    height: { xs: 45, sm: 70 },
                  }}
                  src={`${process.env.PUBLIC_URL}/images/logic-icon.png`}
                />
              </Box>
              <Typography component="h3" variant="h5">
                Compatiable with Logic
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
                Plug and play with Logic.
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
                <Box
                  component="img"
                  sx={{ height: { xs: 45, sm: 70 }}}
                  src={`${process.env.PUBLIC_URL}/images/garageband-icon.png`}
                />
              </Box>
              <Typography component="h3" variant="h5">
                Compatable with Garage Band
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
                Plug and Play with Garage Band.
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
                <Box
                  component="img"
                  sx={{
                    height: { xs: 45, sm: 70 },
                  }}
                  src={`${process.env.PUBLIC_URL}/images/mainstage-icon.png`}
                />
              </Box>
              <Typography component="h3" variant="h5" textAlign="center">
                Compatable with Main Stage
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
                Plug and play with Main Stage.
              </Typography>
            </Box>
          </Grid>
      </Grid>
    </Container>
  );
}
