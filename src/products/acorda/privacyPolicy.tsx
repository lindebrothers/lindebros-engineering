import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../../components/SectionContainer'
import {Link} from 'react-router-dom';


export default function LandingPage() {

  const productName = 'Acorda Audio Unit Plugin'
  const companyName = 'Lindebros engineering'
  const country = 'Sweden'
  const email = 'andylindebrosengineering@gmail.com'

  return (
    <SectionContainer id="ters-of-use" title={`Privacy Policy`}>
      <Box textAlign="left" sx={{ bgcolor: 'background.default' }}>
      <Typography variant="body1">  Thank you for using Acorda app! This Privacy Policy outlines how we collect, use, and safeguard your information when you use the app.</Typography>
      <Typography component="h5" variant="h5" sx={{pt:2}}>
      Information Collection
      </Typography>
      <Typography variant="body1">We do not collect any personal information or data from users of our app. We do not require you to provide any personal information to use our app.</Typography>
      <Typography component="h5" variant="h5" sx={{pt:2}}>
        Data Usage
      </Typography>
      <Typography variant="body1">The app does not collect, store, or transmit any user data. We do not track your activity within the app, nor do we access any personal information stored on your device.</Typography>
      <Typography component="h5" variant="h5" sx={{pt:2}}>
        Age Limit
      </Typography>
      <Typography variant="body1">Our app is intended for users who are at least 4 years old.</Typography>
      <Typography component="h5" variant="h5" sx={{pt:2}}>
        Changes to This Privacy Policy
      </Typography>
      <Typography variant="body1">We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on this page.</Typography>
      <Typography component="h5" variant="h5" sx={{pt:2}}>
        Contact Us
      </Typography>
      <Typography variant="body1">If you have any questions or concerns regarding this Privacy Policy, please contact us at <Link to={email}>{email}</Link></Typography>
      </Box>
    </SectionContainer>
  );
}