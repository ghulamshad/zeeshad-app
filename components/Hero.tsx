'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { motion, useReducedMotion } from 'framer-motion';
import { HOME_HERO, HOW_WE_WORK } from '@/lib/content/site';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#FFFFFF',
        borderBottom: '1px solid',
        borderColor: 'divider',
        pt: { xs: 7, md: 11 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 100% 0%, rgba(36,87,245,0.10), transparent 55%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Box sx={{ width: '100%' }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', mb: 2, display: 'block', letterSpacing: '0.14em' }}
            >
              {HOME_HERO.eyebrow}
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2.5,
                maxWidth: { md: '16ch' },
                fontSize: { xs: 'clamp(2.2rem, 8vw, 3rem)', md: '3.75rem' },
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
              }}
            >
              {HOME_HERO.h1}
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                mb: 4,
                maxWidth: 640,
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                lineHeight: 1.65,
              }}
            >
              {HOME_HERO.body}
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
              <Button
                component={Link}
                href={HOME_HERO.primaryCta.href}
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ px: 3.25, py: 1.55, fontSize: '1rem' }}
              >
                {HOME_HERO.primaryCta.label}
              </Button>
              <Button
                component={Link}
                href={HOME_HERO.secondaryCta.href}
                variant="outlined"
                size="large"
                sx={{ px: 3.25, py: 1.55, fontSize: '1rem' }}
              >
                {HOME_HERO.secondaryCta.label}
              </Button>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.25, sm: 3 }}
              divider={
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: '1px',
                    bgcolor: 'divider',
                    alignSelf: 'stretch',
                  }}
                />
              }
            >
              {HOW_WE_WORK.slice(0, 3).map((item) => (
                <Typography
                  key={item.title}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'text.secondary',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      flexShrink: 0,
                    }}
                  />
                  {item.title}
                </Typography>
              ))}
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
