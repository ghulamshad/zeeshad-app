'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { Reveal } from '@/components/Motion';

const COLS = [
  {
    key: 'zs',
    title: 'ZeeShad',
    desc: 'Written scope first. Staged delivery you can measure.',
    accent: true,
    legend: 'Clear next step',
    value: 'Discovery → scope',
  },
  {
    key: 'boutique',
    title: 'Typical agencies',
    desc: 'Often starts with a pitch deck and a loose timeline.',
    accent: false,
    legend: 'Mid-range clarity',
    value: 'Weeks of back-and-forth',
  },
  {
    key: 'global',
    title: 'Large consultancies',
    desc: 'Long sales cycles before a first working release.',
    accent: false,
    legend: 'Highest overhead',
    value: 'Months to kickoff',
  },
] as const;

export default function DeliveryCompareSection() {
  return (
    <Box component="section" className="zs-prototype" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.9fr 1.1fr' },
            gap: { xs: 4, lg: 6 },
            alignItems: 'end',
          }}
        >
          <Reveal>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.03em',
                fontSize: { xs: '1.65rem', md: '2.15rem' },
                color: '#0E251D',
                mb: 2,
                maxWidth: 440,
                lineHeight: 1.2,
              }}
            >
              Anyone can sketch a prototype. Making it work in your operation is the real work.
            </Typography>
            <Typography sx={{ color: '#505050', mb: 3.5, maxWidth: 420, lineHeight: 1.65 }}>
              We start with a discovery conversation and a written outline of approach—not invented timelines or
              borrowed proof points.
            </Typography>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              sx={{ fontWeight: 700, borderRadius: 1, px: 2.5, py: 1.25, mb: 2 }}
            >
              Get my build plan
            </Button>
            <Typography sx={{ color: '#8A8A8A', fontSize: '0.8rem' }}>
              Indicative ranges — how engagement typically starts, not a price quote
            </Typography>
          </Reveal>

          <Box
            role="img"
            aria-label="Engagement clarity: ZeeShad starts with discovery and written scope; typical agencies often spend weeks clarifying; large consultancies often take months to kickoff."
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 1.5,
                alignItems: 'end',
              }}
            >
              {COLS.map((col, i) => (
                <Box key={col.key} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: '#0E251D', mb: 0.5 }}>{col.title}</Typography>
                    <Typography sx={{ color: '#505050', fontSize: '0.85rem', lineHeight: 1.5, minHeight: 48 }}>
                      {col.desc}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: { xs: 120, sm: 100 + i * 48 },
                      borderRadius: '8px 8px 0 0',
                      background: col.accent
                        ? 'linear-gradient(180deg, rgba(36,87,245,0.85) 0%, rgba(31,219,165,0.75) 100%)'
                        : 'rgba(80,80,80,0.1)',
                      position: 'relative',
                    }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: '0.72rem', color: '#8A8A8A', fontWeight: 600 }}>{col.legend}</Typography>
                    <Typography sx={{ fontWeight: 800, fontSize: '0.95rem', color: '#0E251D' }}>{col.value}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
