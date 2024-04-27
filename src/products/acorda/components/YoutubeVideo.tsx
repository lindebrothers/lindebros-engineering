import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface YouTubeVideoProps {
  url?:string
}

export default function YouTubeVideo({url}:YouTubeVideoProps) {
  return (
    <Container
      id="youtubevideo"
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
        <Typography component="h2" variant="h4" color="text.primary">
          A quick demo
        </Typography>
        <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 0, sm: 0 } }}
            >
              Screen recording when using the acorda AUv3 plugin within Logic Pro.
        </Typography>
      <iframe
        width="560"
        height="315"
        src={`${url}`}
        title="YouTube video player"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        >
        </iframe>
      </Container>
  )
}
