import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PageProtocol {
    question: string;
    answer: React.ReactNode;
}

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


    const pageProtocol:PageProtocol[] = [
      {
        question: "How do I install?",
        answer: (<>
          Navigate to the app page at&nbsp;
          <Link href="https://apps.apple.com/se/app/beatyneattuner/id6470951462">AppStore</Link>
          &nbsp;and download and install the App on your iPhone.
        </>),
      },
      {
        question: "What instruments can I use with Beaty Neat tuner?",
        answer: (<>BeatyNeat Tuner can tune sounds of a guitar or a bass guitar.</>),
      },
      {
        question: "What frequency does the tuner tune?",
        answer: (<>The app is compatible with the frequency for the note A in the treble stave of 440 Hz</>),
      }
    ]

  return (
    <Container
      id="faq"
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
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Get started
      </Typography>
      <Box sx={{ width: '100%' }}>
        <>
          {pageProtocol.map((item,i) => (
            <Accordion
              key={`key-faq-panel${i}`}
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography component="h3" variant="subtitle2">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          </>
      </Box>
    </Container>
  );
}
