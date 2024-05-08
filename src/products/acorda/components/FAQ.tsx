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
        answer: (<>Download the App via AppStore &nbsp;
        <Link href="https://apps.apple.com/se/app/acorda/id6499473804?l=en-GB&mt=12" target="_blank" >https://apps.apple.com/se/app/acorda/id6499473804?l=en-GB&mt=12</Link>
        &nbsp;and make sure app is correctly installed in you application folder.</>),
      },
      {
        question: "How do I start using Acorda in Logic, Garage band or Main stage?",
        answer: (<>Once the App is installed in your application folder on your mac, the organ is avaiable as an instrument, to be used in any music software supporting AUv3 plugins.</>),
      },
      {
        question: "Must I use any additional software to play the organ?",
        answer: (<>No, you can just open the stand alone App and plug in a Midi keyboard via USB and start to play.</>),
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
