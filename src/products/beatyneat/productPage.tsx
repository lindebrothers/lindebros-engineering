import * as React from 'react';
import { PaletteMode } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import SubSellers from './components/SubSellers';
import FAQ from './components/FAQ';

interface LandingPageProps {

}
export default function LandingPage({}:LandingPageProps) {

  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <SubSellers />
        <Divider />
        <FAQ />
      </Box>
    </>
  );
}