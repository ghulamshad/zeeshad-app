'use client';

import { Box, Container, Typography } from '@mui/material';
import { Reveal } from '@/components/Motion';
import { WHERE_WE_WORK, HQ } from '@/lib/content/marketing';

export default function SecuritySection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0E251D', color: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 800,
              letterSpacing: '0.1em',
              fontSize: '0.72rem',
              mb: 1.5,
              textTransform: 'uppercase',
            }}
          >
            Headquarters
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontSize: { xs: '1.65rem', md: '2.15rem' },
              mb: 2,
              maxWidth: 560,
              lineHeight: 1.2,
            }}
          >
            {WHERE_WE_WORK.title}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.7, mb: 3 }}>
            {WHERE_WE_WORK.body}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.7 }}>
            {HQ.legalName}
            <br />
            {HQ.address}
            <br />
            {HQ.phone} · {HQ.email}
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}
