'use client';

import { Box, Container, Typography, Button, Stack, useTheme, alpha } from '@mui/material';
import Link from 'next/link';
import { ArrowForward, WhatsApp } from '@mui/icons-material';

const WHATSAPP_URL = 'https://wa.me/923040058323';

export default function CTASection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.default',
        borderTop: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}
          >
            Ready to talk about a build?
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}
          >
            Send a short brief. We reply with a written scope outline and estimate within
            two business days.
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
              sx={{ px: 4, py: 1.75, fontSize: '1.1rem', borderRadius: 2 }}
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
              sx={{ px: 4, py: 1.75, fontSize: '1.05rem', borderRadius: 2 }}
            >
              WhatsApp
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
