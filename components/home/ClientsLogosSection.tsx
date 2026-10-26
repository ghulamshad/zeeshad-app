'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { INSPIRED_CLIENTS } from '@/lib/content/inspiredHome';

export default function ClientsLogosSection() {
  const row = [...INSPIRED_CLIENTS.logos, ...INSPIRED_CLIENTS.logos];
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography sx={{ color: '#FF7A3D', fontWeight: 800, letterSpacing: '0.14em', fontSize: '0.72rem', mb: 1.25, textTransform: 'uppercase', textAlign: 'center' }}>
            {INSPIRED_CLIENTS.eyebrow}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontWeight: 800, letterSpacing: '-0.03em', fontSize: { xs: '1.65rem', md: '2.35rem' }, color: '#0B1324', mb: 5, textAlign: 'center', maxWidth: 640, mx: 'auto', lineHeight: 1.2 }}
          >
            {INSPIRED_CLIENTS.title}
          </Typography>
        </Reveal>
      </Container>

      <Box className="zs-marquee" sx={{ overflow: 'hidden', mb: 2.5 }}>
        <Box className="zs-marquee__track" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {row.map((src, i) => (
            <Box
              key={`a-${src}-${i}`}
              sx={{
                flexShrink: 0,
                width: 150,
                height: 88,
                bgcolor: '#F5F7FB',
                border: '1px solid #E3E7EF',
                borderRadius: 2,
                display: 'grid',
                placeItems: 'center',
                px: 2,
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: 44 }}>
                <Image src={src} alt="Client Logo" fill unoptimized style={{ objectFit: 'contain' }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="zs-marquee zs-marquee--dark" sx={{ overflow: 'hidden' }}>
        <Box className="zs-marquee__track" sx={{ display: 'flex', alignItems: 'center', gap: 2, animationDirection: 'reverse' as const }}>
          {[...row].reverse().map((src, i) => (
            <Box
              key={`b-${src}-${i}`}
              sx={{
                flexShrink: 0,
                width: 150,
                height: 88,
                bgcolor: '#F5F7FB',
                border: '1px solid #E3E7EF',
                borderRadius: 2,
                display: 'grid',
                placeItems: 'center',
                px: 2,
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: 44 }}>
                <Image src={src} alt="Client Logo" fill unoptimized style={{ objectFit: 'contain' }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
