'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { motion, useReducedMotion } from 'framer-motion';
import { CTA_BAND } from '@/lib/content/solutions';

export default function CTASection() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 9, md: 11 },
        bgcolor: 'secondary.main',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 80% at 90% 10%, rgba(36,87,245,0.45), transparent 55%)',
        }}
      />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box sx={{ textAlign: 'center' }}>
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
              {CTA_BAND.eyebrow}
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 2, color: '#fff' }}>
              {CTA_BAND.title}
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.72)',
                mb: 4,
                lineHeight: 1.7,
                fontSize: '1.1rem',
                maxWidth: 520,
                mx: 'auto',
              }}
            >
              {CTA_BAND.line}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ px: 3.5, py: 1.6 }}
              >
                {CTA_BAND.primary}
              </Button>
              <Button
                component={Link}
                href="/solutions"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.4)',
                  color: '#fff',
                  px: 3,
                  py: 1.6,
                  '&:hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.06)',
                  },
                }}
              >
                {CTA_BAND.secondary}
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
