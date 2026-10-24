'use client';

import { Box, Container, Typography, Button, Chip } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { PROOF_DRAFT, PROOF_TESTIMONIALS } from '@/lib/content/site';

export default function StoriesSection() {
  return (
    <Box component="section" className="zs-stories" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff' }}>
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
                Featured Stories
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
                Stories from our partners
              </Typography>
              <Typography sx={{ color: '#505050', maxWidth: 480, lineHeight: 1.65 }}>
                {PROOF_DRAFT
                  ? 'Placeholder quotes only—replace with approved client permission before publishing as live proof.'
                  : 'Delivery stories from clients who chose to share outcomes publicly.'}
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/case-studies"
              variant="outlined"
              endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
              sx={{ fontWeight: 700, textTransform: 'none', borderRadius: 1 }}
            >
              View case studies
            </Button>
          </Box>
        </Reveal>

        {PROOF_DRAFT && (
          <Chip
            label="Draft proof — not live claims"
            size="small"
            sx={{ mb: 2.5, fontWeight: 700, bgcolor: '#FFF1E8', color: '#9A3412' }}
          />
        )}

        <Stagger>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {PROOF_TESTIMONIALS.map((t) => (
              <StaggerItem key={`${t.name}-${t.role}`}>
                <Box
                  component="article"
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 2,
                    border: '1px dashed',
                    borderColor: PROOF_DRAFT ? '#E8C4A8' : '#E8E8E8',
                    bgcolor: PROOF_DRAFT ? '#FFFBF7' : '#F5F5F5',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Typography sx={{ fontWeight: 700, color: '#0E251D', fontSize: '0.95rem', lineHeight: 1.55, flex: 1 }}>
                    “{t.quote}”
                  </Typography>
                  <Box>
                    <Typography sx={{ fontWeight: 800, color: '#0E251D', fontSize: '0.9rem' }}>{t.name}</Typography>
                    <Typography sx={{ color: '#505050', fontSize: '0.8rem' }}>{t.role}</Typography>
                    <Typography sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.8rem', mt: 1 }}>
                      {t.result}
                    </Typography>
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
