'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import MarketingClosing from '@/components/pages/MarketingClosing';
import { ABOUT_PAGE, HQ, SCOPING_CTA, WHERE_WE_WORK } from '@/lib/content/marketing';

const cardSx = {
  p: 3,
  borderRadius: 3,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
} as const;

export default function AboutMarketingContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              About
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
              {ABOUT_PAGE.hero}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 640, lineHeight: 1.75 }}>
              {ABOUT_PAGE.body}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
              mb: 5,
            }}
          >
            <Box sx={cardSx}>
              <Typography sx={{ fontWeight: 700, mb: 2 }}>Legal identity</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>{HQ.legalName}</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>{HQ.blurb}</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{HQ.address}</Typography>
            </Box>
            <Box sx={cardSx}>
              <Typography sx={{ fontWeight: 700, mb: 2 }}>Contact</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                Email:{' '}
                <Box component={Link} href={`mailto:${HQ.email}`} sx={{ color: 'primary.main' }}>
                  {HQ.email}
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                Phone:{' '}
                <Box component={Link} href={`tel:${HQ.phone.replace(/\s/g, '')}`} sx={{ color: 'primary.main' }}>
                  {HQ.phone}
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{HQ.site}</Typography>
            </Box>
          </Box>

          <Box sx={{ ...cardSx, mb: 5 }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{WHERE_WE_WORK.title}</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{WHERE_WE_WORK.body}</Typography>
          </Box>

          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            Accounts that shaped how we work
          </Typography>
          <Box sx={{ display: 'grid', gap: 3, mb: 5 }}>
            {ABOUT_PAGE.accounts.map((account) => (
              <Box key={account.title} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{account.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{account.body}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ mb: 5, maxWidth: 720 }}>
            <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
              {ABOUT_PAGE.existsTitle}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.75 }}>{ABOUT_PAGE.existsBody}</Typography>
            <Box sx={cardSx}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{ABOUT_PAGE.stat}</Typography>
            </Box>
          </Box>

          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            What we hold ourselves to
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
              mb: 5,
            }}
          >
            {ABOUT_PAGE.values.map((value) => (
              <Box key={value.title} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{value.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{value.body}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ ...cardSx, mb: 5 }}>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>Careers</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{ABOUT_PAGE.careers}</Typography>
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
