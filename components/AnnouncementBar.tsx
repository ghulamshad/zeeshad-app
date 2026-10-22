'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: '#fff',
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: '0.8rem', sm: '0.875rem' },
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          <Box component="span" sx={{ fontWeight: 700, color: '#A8C0FF', mr: 1 }}>
            NEW
          </Box>
          Free Project Cost Estimator: get a price range for your software in 3 minutes.{' '}
          <MuiLink
            component={Link}
            href="#contact"
            sx={{ color: '#fff', fontWeight: 700, textDecoration: 'underline', ml: 0.5 }}
          >
            Try it →
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}
