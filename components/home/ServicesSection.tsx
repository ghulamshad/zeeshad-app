'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { HOME_SERVICES_INTRO, SERVICE_TIERS } from '@/lib/content/marketing';

const TINTS = ['#EAF0FF', '#E7F6EE', '#F1EDFC'] as const;

export default function ServicesSection() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#F5F5F5' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { md: 'flex-end' },
              gap: 2,
              mb: 4.5,
            }}
          >
            <Box>
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
                Services
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  color: '#0E251D',
                  mb: 1,
                  maxWidth: 480,
                }}
              >
                {HOME_SERVICES_INTRO.title}
              </Typography>
              <Typography sx={{ color: '#505050', maxWidth: 560, lineHeight: 1.65 }}>
                {HOME_SERVICES_INTRO.body}
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/services"
              variant="outlined"
              endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
              sx={{ fontWeight: 700, textTransform: 'none', borderRadius: 1 }}
            >
              Explore all services
            </Button>
          </Box>
        </Reveal>

        <Stagger>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
            {SERVICE_TIERS.map((tier, i) => (
              <StaggerItem key={tier.slug}>
                <Box
                  component="article"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#fff',
                    borderRadius: 2,
                    border: '1px solid #E8E8E8',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      minHeight: 120,
                      bgcolor: TINTS[i % TINTS.length],
                      backgroundImage: `linear-gradient(160deg, ${TINTS[i % TINTS.length]} 0%, #fff 90%)`,
                    }}
                  />
                  <Box sx={{ p: 2.75, display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
                    <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#0E251D' }}>
                      {tier.title}
                    </Typography>
                    <Typography sx={{ color: '#505050', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                      {tier.homeBlurb}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: 'primary.main' }}>{tier.fee}</Typography>
                    <Button
                      component={Link}
                      href={tier.href}
                      variant="contained"
                      size="small"
                      endIcon={<ArrowForward sx={{ fontSize: 13 }} />}
                      sx={{ alignSelf: 'flex-start', fontWeight: 700, textTransform: 'none', borderRadius: 1 }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>
      </Container>
    </Box>
  );
}
