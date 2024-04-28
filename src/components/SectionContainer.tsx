import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface YouTubeVideoProps {
  id:string;
  title:string;
  text:string;
  children: React.ReactNode;
}

export default function SectionContainer({id, title, text, children}:YouTubeVideoProps) {
  return (
    <Container
      id={id}
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
          {title}
        </Typography>
        <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 0, sm: 0 } }}
            >
              {text}
        </Typography>
        {children}
      </Container>
  )
}
