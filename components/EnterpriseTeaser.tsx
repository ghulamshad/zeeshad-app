'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { ENTERPRISE_PAGE } from '@/lib/content/site';

export default function EnterpriseTeaser() {
  return (
    <Box
      component="section"
      id="enterprise"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
              gap: { xs: 3, md: 6 },
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
                Enterprise &amp; institutions
              </Typography>
              <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
                {ENTERPRISE_PAGE.headline}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 3, fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560 }}>
                {ENTERPRISE_PAGE.intro}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  component={Link}
                  href="/enterprise-government"
                  variant="contained"
                  endIcon={<ArrowForward />}
                >
                  Enterprise pathway
                </Button>
                <Button component={Link} href="/contact?interest=Enterprise%20%2F%20government%20inquiry" variant="outlined">
                  Request a Proposal
                </Button>
              </Stack>
            </Box>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 2 }}>What to expect</Typography>
              {ENTERPRISE_PAGE.process.map((step, i) => (
                <Typography
                  key={step}
                  sx={{
                    color: 'text.secondary',
                    fontSize: '0.925rem',
                    lineHeight: 1.6,
                    mb: i < ENTERPRISE_PAGE.process.length - 1 ? 1.5 : 0,
                    pl: 2,
                    borderLeft: '2px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  {step}
                </Typography>
              ))}
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
