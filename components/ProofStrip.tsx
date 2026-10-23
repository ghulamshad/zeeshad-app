'use client';

import { Box, Container, Typography } from '@mui/material';
import { PROOF_DRAFT, PROOF_METRICS, PROOF_RECOGNITIONS } from '@/lib/content/site';

export default function ProofStrip() {
  return (
    <Box
      component="section"
      aria-label="Proof and recognitions draft"
      sx={{
        py: { xs: 5, md: 6 },
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        {PROOF_DRAFT && (
          <Typography
            role="note"
            sx={{
              mb: 3,
              px: 1.5,
              py: 1,
              borderRadius: 1,
              bgcolor: 'rgba(194,65,12,0.08)',
              color: 'marketing.dark',
              fontSize: '0.8rem',
              fontWeight: 600,
              lineHeight: 1.5,
            }}
          >
            Draft layout only — replace metrics and recognitions in{' '}
            <Box component="code" sx={{ fontSize: '0.78rem' }}>
              lib/content/site.ts
            </Box>{' '}
            with owner-approved ZeeShad facts, then set PROOF_DRAFT to false.
          </Typography>
        )}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 4,
          }}
        >
          {PROOF_METRICS.map((item) => (
            <Box key={item.label} sx={{ textAlign: { xs: 'left', sm: 'center' } }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  letterSpacing: '-0.03em',
                  color: 'primary.main',
                  lineHeight: 1.1,
                  mb: 0.75,
                }}
              >
                {item.value}
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.45 }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            fontWeight: 800,
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'text.secondary',
            mb: 2,
          }}
        >
          Awards, certifications and partnerships_
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
          }}
        >
          {PROOF_RECOGNITIONS.map((item) => (
            <Box
              key={item.label}
              sx={{
                px: 2,
                py: 1.25,
                borderRadius: 1.5,
                border: '1px dashed',
                borderColor: 'divider',
                bgcolor: 'background.default',
                minWidth: { xs: '45%', sm: 160 },
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: '0.9rem' }}>{item.label}</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', mt: 0.25 }}>
                {item.note}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
