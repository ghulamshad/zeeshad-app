'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import { SOLUTION_PILLARS } from '@/lib/content/site';
import { SOLUTION_SERVICES, SOLUTIONS_HERO } from '@/lib/content/solutions';

export default function SolutionsContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              {SOLUTIONS_HERO.eyebrow}
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
              {SOLUTIONS_HERO.h1}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 600, mb: 3.5, lineHeight: 1.7 }}>
              {SOLUTIONS_HERO.subhead}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForward />}>
                {SOLUTIONS_HERO.primaryCta}
              </Button>
              <Button component={Link} href="/products" variant="outlined">
                {SOLUTIONS_HERO.secondaryCta}
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          {SOLUTION_PILLARS.map((pillar) => (
            <Box
              key={pillar.slug}
              id={pillar.slug}
              sx={{
                mb: { xs: 6, md: 8 },
                scrollMarginTop: 96,
                pb: { xs: 6, md: 8 },
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:last-of-type': { borderBottom: 'none', mb: 0, pb: 0 },
              }}
            >
              <Typography variant="h2" component="h2" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '1.85rem' } }}>
                {pillar.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5, maxWidth: 640, lineHeight: 1.7 }}>
                <Box component="strong" sx={{ color: 'text.primary' }}>
                  Problem:{' '}
                </Box>
                {pillar.problem}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 3, maxWidth: 640, lineHeight: 1.7 }}>
                <Box component="strong" sx={{ color: 'text.primary' }}>
                  Outcome:{' '}
                </Box>
                {pillar.outcome}
              </Typography>
              <Box
                component="ul"
                sx={{
                  m: 0,
                  mb: 3,
                  pl: 0,
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 1.25,
                  maxWidth: 720,
                }}
              >
                {pillar.deliverables.map((d) => (
                  <Box
                    component="li"
                    key={d}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      fontSize: '0.95rem',
                    }}
                  >
                    {d}
                  </Box>
                ))}
              </Box>
              <Button
                component={Link}
                href={`/contact?interest=${encodeURIComponent(
                  pillar.slug === 'ai-automation' ? 'AI & automation' : 'Custom software'
                )}`}
                variant="contained"
                endIcon={<ArrowForward />}
              >
                Discuss Your Project
              </Button>
            </Box>
          ))}

          <Box sx={{ mt: 6 }}>
            <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: '1.5rem' }}>
              Related capabilities
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                gap: 2,
              }}
            >
              {SOLUTION_SERVICES.map((service) => (
                <Box
                  key={service.name}
                  sx={{
                    p: 2.5,
                    borderRadius: 2.5,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography sx={{ fontWeight: 700, mb: 0.75 }}>{service.name}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {service.summary}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </SiteChrome>
  );
}
