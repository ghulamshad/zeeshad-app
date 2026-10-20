'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowForward, WhatsApp } from '@mui/icons-material';
import { motion, useReducedMotion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/923040058323';
const HERO_IMG = '/images/brand/hero-atmosphere.jpg';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: '92svh', md: 'calc(100vh - 78px)' },
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        color: '#fff',
      }}
    >
      <Box sx={{ position: 'absolute', inset: 0 }}>
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(180deg, rgba(14,26,36,0.55) 0%, rgba(14,26,36,0.88) 72%, rgba(14,26,36,0.94) 100%)',
              md: 'linear-gradient(105deg, rgba(14,26,36,0.92) 0%, rgba(14,26,36,0.72) 42%, rgba(14,26,36,0.35) 100%)',
            },
          }}
        />
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: { md: 640 } }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              component="p"
              sx={{
                fontFamily: 'var(--font-syne), Syne, sans-serif',
                fontWeight: 700,
                fontSize: { xs: 'clamp(2.8rem, 12vw, 4.5rem)', md: 'clamp(4rem, 7vw, 5.75rem)' },
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                mb: 2.5,
                color: '#fff',
              }}
            >
              ZeeShad
            </Typography>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: '#fff',
                fontSize: { xs: '1.45rem', sm: '1.7rem', md: '1.95rem' },
                fontWeight: 650,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                mb: 2,
                maxWidth: 540,
              }}
            >
              Custom ERP, SaaS MVP and e-commerce builds that fit how you actually work.
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                mb: 4,
                maxWidth: 480,
              }}
            >
              For SME and mid-size operators who need finance, inventory, sales or workflows
              under one system—or a first SaaS or store that ships without a bloated IT menu.
            </Typography>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.75}
              alignItems={{ xs: 'stretch', sm: 'center' }}
            >
              <Button
                component={Link}
                href="#contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'primary.main',
                  color: '#fff',
                  px: 3.5,
                  py: 1.6,
                  fontSize: '1rem',
                  '&:hover': { bgcolor: 'primary.dark' },
                }}
              >
                Request a scope & estimate
              </Button>
              <Button
                component="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<WhatsApp />}
                sx={{
                  borderColor: 'rgba(255,255,255,0.45)',
                  color: '#fff',
                  px: 3,
                  py: 1.6,
                  '&:hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                WhatsApp us
              </Button>
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
