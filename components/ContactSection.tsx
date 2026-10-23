'use client';

import { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Contact from '@/components/Contact';

function ContactFallback() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }} aria-busy="true">
      <CircularProgress size={32} />
    </Box>
  );
}

type Props = { embedded?: boolean };

export default function ContactSection({ embedded }: Props) {
  return (
    <Suspense fallback={<ContactFallback />}>
      <Contact embedded={embedded} />
    </Suspense>
  );
}
