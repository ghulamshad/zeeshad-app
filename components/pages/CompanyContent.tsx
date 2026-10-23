'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import { COMPANY, COMPANY_OVERVIEW } from '@/lib/content/site';

export default function CompanyContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Company
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 2,
                maxWidth: 640,
              }}
            >
              {COMPANY_OVERVIEW.headline}
            </Typography>
            {COMPANY_OVERVIEW.paragraphs.map((p) => (
              <Typography
                key={p.slice(0, 32)}
                sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 640, mb: 2, lineHeight: 1.75 }}
              >
                {p}
              </Typography>
            ))}
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
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 2 }}>Legal identity</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
                {COMPANY.legalName}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
                {COMPANY.incorporationNote}
              </Typography>
              {COMPANY.addressLines.map((line) => (
                <Typography key={line} sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                  {line}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 2 }}>Contact</Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                Email:{' '}
                <Box component={Link} href={`mailto:${COMPANY.email}`} sx={{ color: 'primary.main' }}>
                  {COMPANY.email}
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                Phone:{' '}
                <Box component={Link} href={`tel:${COMPANY.phoneTel}`} sx={{ color: 'primary.main' }}>
                  {COMPANY.phoneDisplay}
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{COMPANY.hours}</Typography>
            </Box>
          </Box>

          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 3 }}>
            Owner TODO: add approved leadership bios, headcount, or partner details only if verified
            and cleared for publication. Do not invent team size or client counts.
          </Typography>

          <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForward />}>
            Discuss Your Project
          </Button>
        </Container>
      </Box>
    </SiteChrome>
  );
}
