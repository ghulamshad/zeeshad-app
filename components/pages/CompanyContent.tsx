'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import { CLIENTS, COMPANY, COMPANY_OVERVIEW } from '@/lib/content/site';

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

          <Box sx={{ mb: 5 }}>
            <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
              Selected clients
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                gap: 2,
                maxWidth: 960,
              }}
            >
              {CLIENTS.map((client) => (
                <Box
                  key={client.href}
                  sx={{
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Box
                    component={Link}
                    href={client.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {client.name}
                  </Box>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', mt: 0.75 }}>
                    {client.note}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForward />}>
            Discuss Your Project
          </Button>
        </Container>
      </Box>
    </SiteChrome>
  );
}
