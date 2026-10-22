'use client';

import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { motion, useReducedMotion } from 'framer-motion';
import { HOME_HERO } from '@/lib/content/solutions';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 55% at 85% 0%, rgba(36,87,245,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(194,65,12,0.08), transparent 50%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.15fr 0.85fr' },
            gap: { xs: 5, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
                {HOME_HERO.eyebrow}
              </Typography>
              <Typography
                variant="h1"
                component="h1"
                sx={{ mb: 2.5, maxWidth: 620, fontSize: { xs: '2.4rem', md: '3.5rem' } }}
              >
                {HOME_HERO.h1Lead}{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {HOME_HERO.h1Accent}
                </Box>
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: 'text.secondary', mb: 3.5, maxWidth: 520, fontSize: { xs: '1.05rem', md: '1.2rem' } }}
              >
                {HOME_HERO.subhead}
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 3.5 }}>
                <Button
                  component={Link}
                  href="#contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{ px: 3, py: 1.5 }}
                >
                  {HOME_HERO.primaryCta}
                </Button>
                <Button
                  component={Link}
                  href="#contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderColor: 'marketing.main',
                    color: 'marketing.main',
                    '&:hover': { borderColor: 'marketing.dark', bgcolor: 'marketing.light' },
                  }}
                >
                  {HOME_HERO.secondaryCta}
                </Button>
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {HOME_HERO.proofs.map((proof) => (
                  <Chip
                    key={proof}
                    label={`✓ ${proof}`}
                    sx={{
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      height: 34,
                    }}
                  />
                ))}
              </Stack>
            </motion.div>
          </Box>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: 3,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.9rem' }}>Operations · live workflow</Typography>
                <Chip label="LIVE" size="small" sx={{ bgcolor: 'products.light', color: 'products.dark', fontWeight: 700 }} />
              </Stack>
              {[
                { label: 'Order to cash', status: 'Auto-synced' },
                { label: 'Manual steps', status: 'Removed' },
                { label: 'Leads booked', status: 'AI AGENT' },
              ].map((row) => (
                <Box
                  key={row.label}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1.5,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.925rem' }}>{row.label}</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.85rem', color: 'primary.main' }}>
                    {row.status}
                  </Typography>
                </Box>
              ))}
              <Box
                sx={{
                  mt: 2.5,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'solutions.light',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 1.5,
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: 'primary.main', lineHeight: 1 }}>
                    2 days
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mt: 0.5 }}>
                    to a written scope
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: 'primary.main', lineHeight: 1 }}>
                    Weekly
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', mt: 0.5 }}>
                    working demos
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
