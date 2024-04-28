import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SectionContainer from '../../components/SectionContainer'

export default function LandingPage() {

  const productName = 'Acorda Audio Unit Plugin'
  const companyName = 'Lindebros engineering'
  const country = 'Sweden'
  const email = 'support@lindebros-engineering.com'

  return (
    <SectionContainer id="ters-of-use" title={`Terms of Use - ${productName}`}>
      <Box textAlign="left" sx={{ bgcolor: 'background.default' }}>
      <Typography variant="body1">Please carefully review the following terms of use ("Terms") before purchasing, downloading, installing, or using the {productName} (the "Plugin") provided by {companyName} ("we", "us", or "our"). These Terms apply to all users of the Plugin, including individuals, companies, and organizations.</Typography>
      <Typography variant="body1">By using the Plugin, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Plugin.</Typography>
      <Typography component="h5" variant="h5" sx={{pt:2}}>
        1. Use at Your Own Risk
      </Typography>
      <Typography variant="body1">The Plugin is provided "as is" and "as available", without any warranties of any kind, express or implied. We expressly disclaim all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</Typography>
      <Typography variant="body1">You acknowledge and agree that your use of the Plugin is at your own risk, and that we shall not be responsible for any consequences arising from such use.</Typography>

      <Typography component="h5" variant="h5" sx={{pt:2}}>
        2. Limitation of Liability
      </Typography>
      <Typography variant="body1">In no event shall {companyName}, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, arising out of or in connection with the use or performance of the Plugin, even if we have been advised of the possibility of such damages.</Typography>

      <Typography component="h5" variant="h5" sx={{pt:2}}>
        3. Indemnification
      </Typography>
      <Typography variant="body1">You agree to indemnify and hold harmless {companyName} and its affiliates, officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your use of the Plugin or your violation of these Terms.</Typography>

      <Typography component="h5" variant="h5" sx={{pt:2}}>
        4. Termination
      </Typography>
      <Typography variant="body1">We reserve the right to terminate or suspend your access to the Plugin at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</Typography>

      <Typography component="h5" variant="h5" sx={{pt:2}}>
        5. Governing Law
      </Typography>
      <Typography variant="body1">These Terms shall be governed by and construed in accordance with the laws of {country}, without regard to its conflict of law provisions.</Typography>

      <Typography component="h5" variant="h5" sx={{pt:2}}>
        6. Changes to Terms
      </Typography>
      <Typography variant="body1">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</Typography>

      <Typography component="h5" variant="h5" sx={{pt:2}}>
        7. Contact Us
      </Typography>
      <Typography variant="body1">If you have any questions about these Terms, please contact us at {email}.</Typography>
      <Typography variant="body1">By using the {productName}, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.</Typography>
      </Box>
    </SectionContainer>
  );
}