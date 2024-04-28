import * as React from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import SubSellers from './components/SubSellers';
import FAQ from './components/FAQ';
import YouTubeVideo from '../../components/YoutubeVideo'
import SectionContainer from '../../components/SectionContainer'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function LandingPage() {

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
        <Divider />
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ width: { sm: '100%', md: '80%' } }}
          >
            Read more about the <Link href={`${process.env.PUBLIC_URL}/#acorda/terms-of-use`}> Terms of Use</Link>.
          </Typography>
        </Box>
      </Box>
    </>
  );
}