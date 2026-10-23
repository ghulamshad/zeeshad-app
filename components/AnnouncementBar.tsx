'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <Box sx={{ bgcolor: 'secondary.main', color: '#fff', py: 1.1 }}>
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
              letterSpacing: '0.06em',
              fontSize: '0.7rem',
            }}
          >
            CONTACT
          </Box>
          Discuss a project or request a written estimate.{' '}
          <MuiLink
            component={Link}
            href="/contact"
            sx={{ color: '#fff', fontWeight: 700, textDecoration: 'underline' }}
          >
            Get in touch →
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}
