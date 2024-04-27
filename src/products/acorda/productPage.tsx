import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import SubSellers from './components/SubSellers';
import FAQ from './components/FAQ';
import YouTubeVideo from './components/YoutubeVideo'

interface LandingPageProps {

}
export default function LandingPage({}:LandingPageProps) {

  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <SubSellers />
        <Divider />
        <YouTubeVideo url="https://www.youtube.com/embed/d-MhjIgusV0?si=v4CoOOIyfPzc65QH"/>
        <Divider />
        <FAQ />
      </Box>
    </>
  );
}