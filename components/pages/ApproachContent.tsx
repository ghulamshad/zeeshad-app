'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import MarketingClosing from '@/components/pages/MarketingClosing';
import { APPROACH_PAGE, SCOPING_CTA } from '@/lib/content/marketing';

const cardSx = {
  p: 3,
  borderRadius: 3,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
} as const;

export default function ApproachContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Approach
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 2,
                maxWidth: 720,
              }}
            >
              {APPROACH_PAGE.hero}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 640, lineHeight: 1.75 }}>
              {APPROACH_PAGE.body}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            Principles
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              mb: 5,
            }}
          >
            {APPROACH_PAGE.principles.map((item) => (
              <Box key={item.title} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{item.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item.body}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            Five steps
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
              mb: 5,
            }}
          >
            {APPROACH_PAGE.steps.map((step) => (
              <Box key={step.step} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{step.step}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, lineHeight: 1.65 }}>{step.what}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>Who: {step.who}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ ...cardSx, mb: 5 }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>Proof</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{APPROACH_PAGE.proof}</Typography>
          </Box>

          <Button component={Link} href={SCOPING_CTA.href} variant="contained" endIcon={<ArrowForward />}>
            {SCOPING_CTA.label}
          </Button>
        </Container>

        <MarketingClosing />
      </Box>
    </SiteChrome>
  );
}
