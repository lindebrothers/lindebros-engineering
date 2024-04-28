import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


export default function AppAppBar() {

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '999px',
            bgcolor:
              theme.palette.mode === 'light'
                ? 'hsla(220, 60%, 99%, 0.6)'
                : 'hsla(220, 0%, 0%, 0.7)',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow:
              theme.palette.mode === 'light'
                ? '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)'
                : '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              px: 0,
            }}
          >
            <Box
              sx={(theme) => ({
                display: {xs: 'flex', md: 'flex' },
                height: {
                  xs: 35,
                  md: 50,
                },
                width: {
                  xs: 35,
                  md: 600,
                },
                backgroundImage: {
                  xs: `url("${process.env.PUBLIC_URL}/images/lb-logo.png")`,
                  md: `url("${process.env.PUBLIC_URL}/images/lb-engineerings.png")`,
                },
                backgroundPosition: '0 0',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
              })}
            >

            </Box>
          </Box>



        </Toolbar>
      </Container>
    </AppBar>
  );
}
