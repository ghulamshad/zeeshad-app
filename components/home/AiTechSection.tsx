'use client';

import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { ASSETS, INSPIRED_AI } from '@/lib/content/inspiredHome';
import { WS, wsCommonBtnSx, wsH2Sx, wsToptitleSx } from '@/lib/wsDesign';

export default function AiTechSection() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: '14vw', md: '10.06vw' },
        pb: { xs: 8, md: '134px' },
        bgcolor: WS.white,
        color: WS.ink,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: WS.fontBody,
      }}
    >
      <Box aria-hidden component="img" src={ASSETS.aiGlow} alt="" sx={{ position: 'absolute', right: -80, top: -40, width: { xs: 280, md: 520 }, opacity: 0.55, pointerEvents: 'none', zIndex: 0 }} />
      <Box aria-hidden component="img" src={ASSETS.aiBlueMerge} alt="" sx={{ position: 'absolute', left: 0, bottom: 60, width: 140, opacity: 0.8, pointerEvents: 'none', display: { xs: 'none', md: 'block' }, zIndex: 0 }} />

      <Box
        aria-hidden
        component="span"
        sx={{
          position: 'absolute',
          width: '100%',
          left: 0,
          top: 0,
          fontFamily: WS.fontDisplay,
          fontWeight: 900,
          fontSize: { xs: '16vw', sm: '14vw', md: '13.13vw' },
          lineHeight: 0.75,
          textAlign: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
          backgroundImage: 'linear-gradient(rgba(36, 87, 245, 0.3) 40.85%, rgba(255, 255, 255, 0) 161.67%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          opacity: 0.24,
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(rgba(255,255,255,0) 0%, rgb(255,255,255) 100%)',
            pointerEvents: 'none',
          },
        }}
      >
        {INSPIRED_AI.watermark}
      </Box>

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.95fr 1.05fr' },
            gap: { xs: 5, lg: 6 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ position: 'relative', minHeight: { xs: 380, md: 500 }, width: '100%', maxWidth: 540, mx: { xs: 'auto', lg: 0 } }}>
            <Box sx={{ position: 'absolute', left: { xs: 0, md: 10 }, top: { xs: 40, md: 60 }, width: { xs: 150, md: 200 }, height: { xs: 150, md: 200 }, borderRadius: '50%', overflow: 'hidden', zIndex: 3, boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
              <Image src={ASSETS.aiCustomer} alt="Happy customer" fill unoptimized style={{ objectFit: 'cover' }} />
            </Box>
            <Box sx={{ position: 'absolute', right: 0, top: 0, width: { xs: '72%', md: 360 }, height: { xs: 240, md: 320 }, borderRadius: 3, overflow: 'hidden', zIndex: 1 }}>
              <Image src={ASSETS.aiMain} alt="" fill unoptimized style={{ objectFit: 'cover' }} />
            </Box>
            <Box sx={{ position: 'absolute', right: { xs: 24, md: 60 }, bottom: { xs: 30, md: 50 }, width: { xs: 150, md: 200 }, height: { xs: 110, md: 145 }, borderRadius: 2, overflow: 'hidden', border: '4px solid #fff', zIndex: 4, boxShadow: '0 16px 40px rgba(0,0,0,0.2)' }}>
              <Image src={ASSETS.aiSmall} alt="" fill unoptimized style={{ objectFit: 'cover' }} />
            </Box>
            <Box aria-hidden sx={{ position: 'absolute', left: { md: 180 }, bottom: { md: 100 }, width: 140, height: 140, display: { xs: 'none', md: 'block' }, zIndex: 2 }}>
              <Image src={ASSETS.aiRound} alt="" fill unoptimized style={{ objectFit: 'contain' }} />
            </Box>
            <Box aria-hidden component="img" src={ASSETS.aiBlueDot} alt="" sx={{ position: 'absolute', right: 30, top: 140, width: 36, display: { xs: 'none', md: 'block' }, zIndex: 2 }} />
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 8, md: 30 },
                bottom: 8,
                bgcolor: WS.white,
                borderRadius: 2,
                px: 2,
                py: 1.25,
                zIndex: 5,
                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              }}
            >
              <Typography sx={{ fontFamily: WS.fontBody, fontWeight: 700, fontSize: '0.9rem', color: WS.cyan }}>
                {INSPIRED_AI.projectsNote}
              </Typography>
            </Box>
          </Box>

          <Reveal>
            <Typography component="span" sx={wsToptitleSx}>
              {INSPIRED_AI.eyebrow}
            </Typography>
            <Typography component="h2" sx={{ ...wsH2Sx, mb: 2.5 }}>
              Future-proof Your Business With Our{' '}
              <Box component="span" sx={{ color: WS.cyan }}>
                Intelligent AI Tech
              </Box>
            </Typography>
            <Typography sx={{ fontFamily: WS.fontBody, fontSize: '16px', lineHeight: '24px', color: WS.slate, mb: 3.5, maxWidth: 560 }}>
              {INSPIRED_AI.body}
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mb: 4 }}>
              {INSPIRED_AI.bullets.map((b) => (
                <Box
                  component="li"
                  key={b}
                  sx={{
                    position: 'relative',
                    pl: '30px',
                    mb: 1.5,
                    fontFamily: WS.fontBody,
                    fontSize: '16px',
                    fontWeight: 500,
                    color: WS.ink,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 2,
                      width: 20,
                      height: 20,
                      backgroundImage: `url(${ASSETS.orangeCheck})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                    },
                  }}
                >
                  <Box component={Link} href="/contact" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: WS.orange } }}>
                    {b}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box component={Link} href={INSPIRED_AI.cta.href} sx={wsCommonBtnSx}>
              {INSPIRED_AI.cta.label}
              <Box component="img" src={ASSETS.btnArrow} alt="" />
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
