import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import SubSellers from './components/SubSellers';
import FAQ from './components/FAQ';
import YouTubeVideo from '../../components/YoutubeVideo'
import SectionContainer from '../../components/SectionContainer'

interface LandingPageProps {

}
export default function LandingPage({}:LandingPageProps) {

  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <SubSellers />
        <Divider />
        <SectionContainer
          id="videodemo"
          title="A quick demo"
          text="Screen recording when using the acorda AUv3 plugin within Logic Pro."
        >
          <YouTubeVideo
            url="https://www.youtube.com/embed/d-MhjIgusV0?si=v4CoOOIyfPzc65QH"
            width={900}
            height={506}
          />
        </SectionContainer>
        <Divider />
        <FAQ />
      </Box>
    </>
  );
}