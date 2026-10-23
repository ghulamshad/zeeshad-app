'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import { COMPANY, ENTERPRISE_PAGE } from '@/lib/content/site';

export default function EnterpriseContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Enterprise &amp; government
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
              {ENTERPRISE_PAGE.headline}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 640, mb: 3.5, lineHeight: 1.7 }}>
              {ENTERPRISE_PAGE.intro}
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
              <Button component={Link} href={`mailto:${COMPANY.email}?subject=Corporate%20capability%20statement`} variant="outlined">
                Request Corporate Profile
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: '1.5rem' }}>
            Relevant capabilities
          </Typography>
          <Box
            component="ul"
            sx={{
              m: 0,
              mb: 6,
              pl: 0,
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
            }}
          >
            {ENTERPRISE_PAGE.capabilities.map((item) => (
              <Box
                component="li"
                key={item}
                sx={{
                  p: 2.5,
                  borderRadius: 2.5,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  lineHeight: 1.6,
                }}
              >
                {item}
              </Box>
            ))}
          </Box>

          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: '1.5rem' }}>
            Proposal process
          </Typography>
          <Box sx={{ mb: 5 }}>
            {ENTERPRISE_PAGE.process.map((step, i) => (
              <Box
                key={step}
                sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 2,
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography sx={{ color: 'primary.main', fontWeight: 800, minWidth: 28 }}>0{i + 1}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{step}</Typography>
              </Box>
            ))}
          </Box>

          <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 640 }}>
            {ENTERPRISE_PAGE.ctaNote}
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 2 }}>
            Owner TODO: confirm whether a formal capability statement PDF and any registrations or
            certifications may be shared under NDA, and provide approved documents.
          </Typography>
        </Container>
      </Box>
    </SiteChrome>
  );
}
