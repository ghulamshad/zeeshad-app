'use client';

import { Box, Container, Typography, Button, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { CheckCircleOutline } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { CALENDLY_URL, CLOSING_BLOCK, SCOPING_CTA } from '@/lib/content/marketing';
import { COMPANY } from '@/lib/content/site';
import ContactSection from '@/components/ContactSection';

export default function DiscoverySection() {
  return (
    <Box
      component="section"
      id="discovery"
      sx={{ py: { xs: 8, md: 11 }, bgcolor: '#F5F5F5', scrollMarginTop: 96 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.9fr 1.1fr' },
            gap: { xs: 4, lg: 5 },
            p: { xs: 2.5, md: 4 },
            borderRadius: 2,
            bgcolor: '#fff',
            border: '1px solid #E8E8E8',
          }}
        >
          <Reveal>
            <Typography
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                letterSpacing: '0.1em',
                fontSize: '0.72rem',
                mb: 1.25,
                textTransform: 'uppercase',
              }}
            >
              Free scoping call
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.03em',
                fontSize: { xs: '1.65rem', md: '2.1rem' },
                color: '#0E251D',
                mb: 1.5,
                maxWidth: 400,
              }}
            >
              {CLOSING_BLOCK.title}
            </Typography>
            <Typography sx={{ color: '#505050', mb: 3, maxWidth: 420, lineHeight: 1.65 }}>
              {CLOSING_BLOCK.body}
            </Typography>

            <StackButtons />

            <Typography sx={{ mt: 3, color: '#505050', fontSize: '0.85rem' }}>
              Or reach us at{' '}
              <MuiLink href={`mailto:${COMPANY.email}`} sx={{ fontWeight: 700 }}>
                {COMPANY.email}
              </MuiLink>
              {' · '}
              <MuiLink href={`tel:${COMPANY.phoneTel}`} sx={{ fontWeight: 700 }}>
                {COMPANY.phoneDisplay}
              </MuiLink>
            </Typography>
          </Reveal>

          <Box>
            <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.15rem', color: '#0E251D', mb: 0.5 }}>
              Tell us what needs handling
            </Typography>
            <Typography sx={{ color: '#505050', mb: 2, fontSize: '0.9rem' }}>
              Not sure which service you need? Pick Not sure yet. Most first calls start there.
            </Typography>
            <ContactSection embedded />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function StackButtons() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 2 }}>
      <Button
        component={Link}
        href={SCOPING_CTA.href}
        variant="contained"
        sx={{ fontWeight: 700, borderRadius: 1, px: 2.5, py: 1.2 }}
      >
        {SCOPING_CTA.label}
      </Button>
      <Button
        component="a"
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        sx={{ fontWeight: 700, borderRadius: 1, px: 2.5, py: 1.2 }}
      >
        Skip the form, pick the time
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%', mt: 0.5 }}>
        <CheckCircleOutline sx={{ color: 'primary.main', fontSize: 20 }} aria-hidden />
        <Typography sx={{ fontSize: '0.85rem', color: '#505050' }}>
          No invoice until you approve the scope
        </Typography>
      </Box>
    </Box>
  );
}
