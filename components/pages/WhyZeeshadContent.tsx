'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import MarketingClosing from '@/components/pages/MarketingClosing';
import { SCOPING_CTA, WHY_PAGE } from '@/lib/content/marketing';

const cardSx = {
  p: 3,
  borderRadius: 3,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
} as const;

export default function WhyZeeshadContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Why ZeeShad
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
              {WHY_PAGE.introTitle}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 640, lineHeight: 1.75 }}>
              {WHY_PAGE.intro}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            Six things you can hold us to
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              mb: 5,
            }}
          >
            {WHY_PAGE.six.map((item) => (
              <Box key={item.title} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{item.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item.body}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            Compared
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              mb: 5,
            }}
          >
            {WHY_PAGE.compare.map((row) => (
              <Box key={row.label} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 2 }}>{row.label}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
                  <Box component="strong" sx={{ color: 'text.primary' }}>
                    Time:{' '}
                  </Box>
                  {row.time}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
                  <Box component="strong" sx={{ color: 'text.primary' }}>
                    Commit:{' '}
                  </Box>
                  {row.commit}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
                  <Box component="strong" sx={{ color: 'text.primary' }}>
                    Breadth:{' '}
                  </Box>
                  {row.breadth}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
                  <Box component="strong" sx={{ color: 'text.primary' }}>
                    Visibility:{' '}
                  </Box>
                  {row.visibility}
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                  <Box component="strong" sx={{ color: 'text.primary' }}>
                    Accounts:{' '}
                  </Box>
                  {row.accounts}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            Where you are
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              mb: 5,
            }}
          >
            {WHY_PAGE.stages.map((stage) => (
              <Box key={stage.title} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{stage.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{stage.body}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            Expertise
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
              gap: 2,
              mb: 5,
            }}
          >
            {WHY_PAGE.expertise.map((item) => (
              <Box key={item} sx={{ ...cardSx, p: 2.5, borderRadius: 2 }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            FAQ
          </Typography>
          <Box sx={{ display: 'grid', gap: 2, mb: 5, maxWidth: 800 }}>
            {WHY_PAGE.faq.map((item) => (
              <Box key={item.q} sx={cardSx}>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{item.q}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item.a}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
            Reasons to hire
          </Typography>
          <Box
            component="ul"
            sx={{
              m: 0,
              mb: 5,
              pl: 0,
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
            }}
          >
            {WHY_PAGE.hireReasons.map((reason) => (
              <Box component="li" key={reason} sx={{ ...cardSx, p: 2.5, borderRadius: 2 }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{reason}</Typography>
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
