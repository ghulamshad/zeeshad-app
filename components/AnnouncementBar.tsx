'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { TOP_BAR } from '@/lib/content/marketing';
import { COMPANY } from '@/lib/content/site';

export default function AnnouncementBar() {
  return (
    <Box sx={{ bgcolor: '#070C16', color: '#fff', py: 1.1 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: '0.72rem', sm: '0.8rem' },
            textAlign: 'center',
            lineHeight: 1.45,
          }}
        >
          {TOP_BAR.line} ·{' '}
          <MuiLink component={Link} href={`mailto:${COMPANY.email}`} sx={{ color: '#A8C0FF', fontWeight: 700 }}>
            {COMPANY.email}
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
}
