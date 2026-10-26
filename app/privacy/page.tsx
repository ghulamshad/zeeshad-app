'use client';

import Link from 'next/link';
import { Container, Box, Typography, Button } from '@mui/material';
import SiteChrome from '@/components/SiteChrome';
import { HQ, PRIVACY_PAGE, SCOPING_CTA } from '@/lib/content/marketing';

export default function PrivacyPage() {
  return (
    <SiteChrome showAnnouncement={false}>
      <Box component="main" id="main-content" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, mb: 2 }}>
            Privacy Policy
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
            Effective: {PRIVACY_PAGE.effective}
          </Typography>

          <Box sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: '1.35rem', fontWeight: 700, color: 'text.primary', mt: 3, mb: 2 }}
            >
              Who we are
            </Typography>
            <Typography sx={{ mb: 2 }}>
              {HQ.legalName} (&quot;ZeeShad&quot;, &quot;we&quot;, &quot;us&quot;) operates {HQ.site}. Registered office:{' '}
              {HQ.address}. Contact: {HQ.email} · {HQ.phone}.
            </Typography>

            {PRIVACY_PAGE.sections.map((section) => (
              <Box key={section.title}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{ fontSize: '1.35rem', fontWeight: 700, color: 'text.primary', mt: 3, mb: 2 }}
                >
                  {section.title}
                </Typography>
                <Typography sx={{ mb: 2 }}>{section.body}</Typography>
              </Box>
            ))}
          </Box>

          <Button component={Link} href={SCOPING_CTA.href} variant="contained" sx={{ mt: 4 }}>
            {SCOPING_CTA.label}
          </Button>
        </Container>
      </Box>
    </SiteChrome>
  );
}
