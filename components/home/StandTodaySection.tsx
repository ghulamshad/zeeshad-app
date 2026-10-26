'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { HOME_PILLAR_CARDS } from '@/lib/content/marketing';

export default function StandTodaySection() {
  return (
    <Box component="section" id="start-here" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#F5F5F5', scrollMarginTop: 96 }}>
      <Container maxWidth="lg">
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
            Start here
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: '#0E251D',
              mb: 4.5,
              maxWidth: 560,
              fontSize: { xs: '1.75rem', md: '2.35rem' },
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            Approach, experience and value
          </Typography>
        </Reveal>

        <Stagger>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
            {HOME_PILLAR_CARDS.map((item) => (
              <StaggerItem key={item.title}>
                <Box
                  component="article"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    bgcolor: '#fff',
                    border: '1px solid #E8E8E8',
                    p: { xs: 2.5, md: 3 },
                    gap: 1.5,
                  }}
                >
                  <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.15rem', color: '#0E251D' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: '#505050', fontSize: '0.92rem', lineHeight: 1.65, flex: 1 }}>
                    {item.body}
                  </Typography>
                  <Button
                    component={Link}
                    href={item.cta.href}
                    endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
                    sx={{ alignSelf: 'flex-start', fontWeight: 700, textTransform: 'none', px: 0 }}
                  >
                    {item.cta.label}
                  </Button>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>
      </Container>
    </Box>
  );
}
