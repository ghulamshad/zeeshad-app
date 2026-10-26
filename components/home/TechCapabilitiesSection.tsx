'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { INSPIRED_TECH } from '@/lib/content/inspiredHome';
import { WS, wsH2Sx, wsToptitleSx } from '@/lib/wsDesign';

export default function TechCapabilitiesSection() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#F8FAFC', fontFamily: WS.fontBody }}>
      <Container maxWidth={false} sx={{ maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography component="span" sx={wsToptitleSx}>
              {INSPIRED_TECH.eyebrow}
            </Typography>
            <Typography component="h2" sx={wsH2Sx}>
              {INSPIRED_TECH.title}
            </Typography>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(8, 1fr)' },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {INSPIRED_TECH.items.map((item) => (
            <Box
              key={item.name}
              sx={{
                bgcolor: WS.white,
                borderRadius: '14px',
                py: { xs: 2.75, md: 3.25 },
                px: 1.25,
                textAlign: 'center',
                border: '1px solid rgba(36,87,245,0.08)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 16px 36px rgba(36,87,245,0.12)',
                },
              }}
            >
              <Box sx={{ position: 'relative', width: 48, height: 48, mx: 'auto', mb: 1.25 }}>
                <Image src={item.icon} alt={item.name} fill unoptimized style={{ objectFit: 'contain' }} />
              </Box>
              <Typography sx={{ fontFamily: WS.fontBody, fontWeight: 600, fontSize: '13px', color: WS.ink }}>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
