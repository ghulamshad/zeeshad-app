'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { motion, useReducedMotion } from 'framer-motion';
import { HOME_HERO, HOW_WE_WORK, SOLUTION_PILLARS } from '@/lib/content/site';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'secondary.main',
        color: '#fff',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        pt: { xs: 7, md: 10 },
        pb: { xs: 0, md: 0 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 85% -10%, rgba(36,87,245,0.45), transparent 55%), radial-gradient(ellipse 40% 40% at 0% 100%, rgba(20,184,166,0.12), transparent 50%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, width: '100%', pb: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' },
            gap: { xs: 5, lg: 6 },
            alignItems: 'end',
          }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              sx={{
                color: '#A8C0FF',
                fontWeight: 800,
                letterSpacing: '0.14em',
                fontSize: '0.72rem',
                mb: 2,
                textTransform: 'uppercase',
              }}
            >
              {HOME_HERO.eyebrow}_
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2.5,
                maxWidth: { md: '14ch' },
                fontSize: { xs: 'clamp(2.35rem, 8vw, 3.1rem)', md: '3.85rem' },
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                color: '#fff',
              }}
            >
              {HOME_HERO.h1}
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.68)',
                mb: 4,
                maxWidth: 560,
                fontSize: { xs: '1.05rem', md: '1.15rem' },
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
                sx={{
                  px: 3.25,
                  py: 1.55,
                  fontSize: '1rem',
                  borderColor: 'rgba(255,255,255,0.35)',
                  color: '#fff',
                  '&:hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.06)',
                  },
                }}
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
                    bgcolor: 'rgba(255,255,255,0.2)',
                    alignSelf: 'stretch',
                  }}
                />
              }
            >
              {HOW_WE_WORK.slice(0, 3).map((item) => (
                <Typography
                  key={item.title}
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.7)',
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
                      bgcolor: 'primary.light',
                      flexShrink: 0,
                    }}
                  />
                  {item.title}
                </Typography>
              ))}
            </Stack>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {SOLUTION_PILLARS.map((pillar, i) => (
                <Box
                  key={pillar.slug}
                  component={Link}
                  href={pillar.href}
                  sx={{
                    p: 2.25,
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.12)',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s, background 0.2s',
                    '&:hover': {
                      borderColor: 'rgba(168,192,255,0.5)',
                      bgcolor: 'rgba(36,87,245,0.2)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: '#A8C0FF',
                      fontWeight: 800,
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      mb: 0.75,
                      textTransform: 'uppercase',
                    }}
                  >
                    Solution {String(i + 1).padStart(2, '0')}_
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: '#fff', mb: 0.5, fontSize: '1rem' }}>
                    {pillar.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {pillar.outcome}
                  </Typography>
                </Box>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
