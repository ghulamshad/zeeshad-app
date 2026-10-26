'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { PROOF_ACCOUNTS, PROOF_DISCLAIMER } from '@/lib/content/marketing';

export default function StoriesSection() {
  return (
    <Box component="section" id="results" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff', scrollMarginTop: 96 }}>
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
                Proof
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
                }}
              >
                What came in, and what it cost
              </Typography>
              <Typography sx={{ color: '#505050', maxWidth: 560, lineHeight: 1.65 }}>
                Four accounts. Each line shows the spend, what came back and the cost per lead, so you can judge the
                work rather than take our word for it.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/resources"
              variant="outlined"
              endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
              sx={{ fontWeight: 700, textTransform: 'none', borderRadius: 1 }}
            >
              Read the latest
            </Button>
          </Box>
        </Reveal>

        <Stagger>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            {PROOF_ACCOUNTS.map((row) => (
              <StaggerItem key={row.account}>
                <Box
                  component="article"
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 2,
                    border: '1px solid #E8E8E8',
                    bgcolor: '#F5F5F5',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.25,
                  }}
                >
                  <Typography sx={{ fontWeight: 800, color: '#0E251D', fontSize: '1rem' }}>{row.account}</Typography>
                  <Typography sx={{ color: '#505050', fontSize: '0.85rem' }}>
                    {row.channel} · {row.spend}
                  </Typography>
                  <Typography sx={{ color: '#0E251D', fontSize: '0.95rem', lineHeight: 1.55, flex: 1 }}>
                    {row.result}
                  </Typography>
                  <Typography sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.9rem' }}>{row.cpl}</Typography>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>

        <Typography sx={{ color: '#8A8A8A', fontSize: '0.8rem', mt: 3, lineHeight: 1.6, maxWidth: 720 }}>
          {PROOF_DISCLAIMER}
        </Typography>
      </Container>
    </Box>
  );
}
