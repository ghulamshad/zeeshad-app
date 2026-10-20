'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { ArrowForward, WhatsApp } from '@mui/icons-material';
import { motion, useReducedMotion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/923040058323';

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
            'radial-gradient(ellipse 70% 80% at 85% 20%, rgba(10,107,104,0.35), transparent 55%)',
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
            <Typography variant="h2" component="h2" sx={{ mb: 2, color: '#fff' }}>
              Ready to talk about a build?
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
              Send a short brief. We reply with a written scope outline and estimate within two
              business days.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                component={Link}
                href="#contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'primary.main',
                  px: 3.5,
                  py: 1.6,
                  '&:hover': { bgcolor: 'primary.light' },
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
                WhatsApp
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
