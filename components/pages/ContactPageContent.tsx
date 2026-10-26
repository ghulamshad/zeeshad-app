'use client';

import { Box, Container, Typography } from '@mui/material';
import SiteChrome from '@/components/SiteChrome';
import ContactSection from '@/components/ContactSection';
import { CONTACT_PAGE } from '@/lib/content/marketing';

export default function ContactPageContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default', py: { xs: 6, md: 9 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Contact
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 2,
              }}
            >
              {CONTACT_PAGE.hero}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
              {CONTACT_PAGE.body}
            </Typography>
          </Box>
          <ContactSection embedded />
        </Container>
      </Box>
    </SiteChrome>
  );
}
