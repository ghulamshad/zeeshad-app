'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <Box sx={{ bgcolor: '#070C16', color: '#fff', py: 1.1 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: '0.78rem', sm: '0.875rem' },
            textAlign: 'center',
            lineHeight: 1.45,
          }}
        >
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              fontWeight: 800,
              color: '#A8C0FF',
              mr: 1,
              letterSpacing: '0.08em',
              fontSize: '0.7rem',
            }}
          >
            DISCOVERY_
          </Box>
          Share a brief—get a straight answer on what to build next.{' '}
          <MuiLink
            component={Link}
            href="/contact"
            sx={{ color: '#fff', fontWeight: 700, textDecoration: 'underline' }}
          >
            Book a conversation →
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}
