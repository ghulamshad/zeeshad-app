'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import MarketingClosing from '@/components/pages/MarketingClosing';
import { SCOPING_CTA, SERVICE_TIERS, SERVICES_OVERVIEW } from '@/lib/content/marketing';

const cardSx = {
  p: 3,
  borderRadius: 3,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
} as const;

export default function ServicesOverviewContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Services
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
              {SERVICES_OVERVIEW.hero}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 640, lineHeight: 1.75 }}>
              {SERVICES_OVERVIEW.body}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              mb: 5,
            }}
          >
            {SERVICE_TIERS.map((tier) => (
              <Box key={tier.slug} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 1.5, fontSize: '1.15rem' }}>{tier.title}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.65, flexGrow: 1 }}>
                  {tier.homeBlurb}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', mb: 0.5 }}>
                  Best for: {tier.bestFor}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', mb: 0.5 }}>
                  Channels: {tier.channels}
                </Typography>
                <Typography sx={{ fontWeight: 600, mb: 2.5 }}>{tier.fee}</Typography>
                <Button
                  component={Link}
                  href={tier.href}
                  variant="outlined"
                  endIcon={<ArrowForward />}
                  sx={{ alignSelf: 'flex-start' }}
                >
                  Learn more
                </Button>
              </Box>
            ))}
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
