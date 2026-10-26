'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { CLOSING_BLOCK, SCOPING_CTA } from '@/lib/content/marketing';

export default function MarketingClosing() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontSize: { xs: '1.5rem', md: '1.85rem' }, fontWeight: 800, mb: 2, maxWidth: 640 }}
        >
          {CLOSING_BLOCK.title}
        </Typography>
        <Typography
          sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 640, mb: 3.5, lineHeight: 1.75 }}
        >
          {CLOSING_BLOCK.body}
        </Typography>
        <Button
          component={Link}
          href={SCOPING_CTA.href}
          variant="contained"
          endIcon={<ArrowForward />}
        >
          {SCOPING_CTA.label}
        </Button>
      </Container>
    </Box>
  );
}
