'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import { COMPANY } from '@/lib/content/site';

/**
 * Landing for buyers requesting a corporate capability statement.
 * No PDF is published on the site until the owner supplies an approved document.
 */
export default function CapabilityStatementContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Container maxWidth="md" sx={{ py: { xs: 7, md: 10 } }}>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
            Enterprise &amp; government
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              letterSpacing: '-0.03em',
              mb: 2,
            }}
          >
            Request a corporate capability statement
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75, mb: 3 }}>
            Institutional and enterprise buyers can request a written capability overview for a
            specific opportunity. We do not publish registration numbers, tender credentials, or a
            public PDF on this website. Sensitive documents are shared only through a controlled
            process when a legitimate buyer requests them.
          </Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 4 }}>
            Use the contact form with interest set to enterprise / government, or email{' '}
            <Box component={Link} href={`mailto:${COMPANY.email}`} sx={{ color: 'primary.main' }}>
              {COMPANY.email}
            </Box>{' '}
            with a brief or RFP summary.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button
              component={Link}
              href="/contact?interest=Enterprise%20%2F%20government%20inquiry"
              variant="contained"
              endIcon={<ArrowForward />}
            >
              Request a Proposal
            </Button>
            <Button component={Link} href="/enterprise-government" variant="outlined">
              Back to enterprise pathway
            </Button>
          </Stack>
        </Container>
      </Box>
    </SiteChrome>
  );
}
