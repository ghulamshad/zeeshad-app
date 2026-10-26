'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { Reveal } from '@/components/Motion';
import { SCOPING_CTA, WHY_PAGE } from '@/lib/content/marketing';

export default function DeliveryCompareSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff' }}>
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
              The option between hiring and an agency
            </Typography>
            <Typography sx={{ color: '#505050', mb: 3.5, maxWidth: 420, lineHeight: 1.65 }}>
              {WHY_PAGE.intro}
            </Typography>
            <Button
              component={Link}
              href={SCOPING_CTA.href}
              variant="contained"
              sx={{ fontWeight: 700, borderRadius: 1, px: 2.5, py: 1.25 }}
            >
              {SCOPING_CTA.label}
            </Button>
          </Reveal>

          <Box role="img" aria-label="Comparison of hire in-house, traditional agency, and ZeeShad">
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 1.5,
                alignItems: 'stretch',
              }}
            >
              {WHY_PAGE.compare.map((col, i) => (
                <Box
                  key={col.label}
                  sx={{
                    p: 2.25,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: i === 2 ? 'primary.main' : '#E8E8E8',
                    bgcolor: i === 2 ? '#EAF0FF' : '#F5F5F5',
                  }}
                >
                  <Typography sx={{ fontWeight: 800, color: '#0E251D', mb: 1.5 }}>{col.label}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#505050', mb: 1, lineHeight: 1.5 }}>
                    <Box component="span" sx={{ fontWeight: 700, color: '#0E251D' }}>
                      Start:{' '}
                    </Box>
                    {col.time}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#505050', mb: 1, lineHeight: 1.5 }}>
                    <Box component="span" sx={{ fontWeight: 700, color: '#0E251D' }}>
                      Commitment:{' '}
                    </Box>
                    {col.commit}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#505050', lineHeight: 1.5 }}>
                    <Box component="span" sx={{ fontWeight: 700, color: '#0E251D' }}>
                      Accounts:{' '}
                    </Box>
                    {col.accounts}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
