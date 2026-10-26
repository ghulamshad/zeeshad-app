'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { ASSETS, INSPIRED_CEO } from '@/lib/content/inspiredHome';
import { WS, wsBodySx, wsH2Sx, wsToptitleSx } from '@/lib/wsDesign';

export default function SecuritySection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: WS.white, position: 'relative', overflow: 'hidden', fontFamily: WS.fontBody }}>
      <Box
        aria-hidden
        component="img"
        src={ASSETS.ceoShape2}
        alt=""
        sx={{
          position: 'absolute',
          left: { xs: -40, md: 20 },
          bottom: { xs: 50, md: 80 },
          width: { xs: 130, md: 190 },
          opacity: 0.85,
          pointerEvents: 'none',
          filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(2400%) hue-rotate(214deg) brightness(98%) contrast(96%)',
        }}
      />
      <Box
        aria-hidden
        component="img"
        src={ASSETS.ceoShape1}
        alt=""
        sx={{
          position: 'absolute',
          right: { xs: 0, md: 40 },
          top: { xs: 24, md: 50 },
          width: { xs: 120, md: 200 },
          opacity: 0.9,
          pointerEvents: 'none',
          filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(2400%) hue-rotate(214deg) brightness(98%) contrast(96%)',
        }}
      />
      {/* Blue shade — left */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: { xs: -100, md: -80 },
          top: '50%',
          transform: 'translateY(-50%)',
          width: { xs: 280, md: 420 },
          height: { xs: 420, md: 640 },
          background: 'radial-gradient(ellipse at center, rgba(36,87,245,0.18) 0%, rgba(36,87,245,0.06) 40%, transparent 68%)',
          filter: 'blur(8px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Blue shade — right */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          right: { xs: -100, md: -80 },
          top: '45%',
          transform: 'translateY(-50%)',
          width: { xs: 280, md: 420 },
          height: { xs: 420, md: 640 },
          background: 'radial-gradient(ellipse at center, rgba(36,87,245,0.18) 0%, rgba(36,87,245,0.06) 40%, transparent 68%)',
          filter: 'blur(8px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        component="img"
        src={ASSETS.ceoDot}
        alt=""
        sx={{
          position: 'absolute',
          left: { md: '42%' },
          bottom: { md: 70 },
          width: { md: 130 },
          opacity: 0.9,
          pointerEvents: 'none',
          display: { xs: 'none', md: 'block' },
          filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(2400%) hue-rotate(214deg) brightness(98%) contrast(96%)',
        }}
      />

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '0.9fr 1.1fr' }, gap: { xs: 4, lg: 7 }, alignItems: 'center' }}>
          <Box sx={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', minHeight: { xs: 380, md: 560 }, boxShadow: '0 30px 80px rgba(11,19,36,0.16)' }}>
            <Image src={ASSETS.ceoPhoto} alt="Founder & CEO" fill unoptimized priority style={{ objectFit: 'cover', objectPosition: 'center top' }} />
            <Box aria-hidden sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,16,36,0.25) 100%)' }} />
          </Box>

          <Reveal>
            <Typography component="span" sx={wsToptitleSx}>
              {INSPIRED_CEO.eyebrow}
            </Typography>
            <Typography component="h2" sx={{ ...wsH2Sx, mb: 3, fontSize: { xs: '1.65rem', md: '42px' }, lineHeight: { md: '48px' } }}>
              {INSPIRED_CEO.title}
            </Typography>
            {INSPIRED_CEO.paragraphs.map((p) => (
              <Typography key={p.slice(0, 32)} sx={{ ...wsBodySx, mb: 2.25, lineHeight: 1.85 }}>
                {p}
              </Typography>
            ))}
            <Box sx={{ position: 'relative', width: 170, height: 60, mt: 2 }}>
              <Image src={ASSETS.ceoSign} alt="Signature" fill unoptimized style={{ objectFit: 'contain', objectPosition: 'left center' }} />
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
