'use client';

import { useRef } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { ASSETS, INSPIRED_CASES } from '@/lib/content/inspiredHome';
import { WS, wsCommonBtnSx, wsH2LightSx, wsToptitleSx } from '@/lib/wsDesign';

export default function StoriesSection() {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: -1 | 1) => {
    scroller.current?.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="portfolio"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: WS.dark,
        color: WS.white,
        scrollMarginTop: 96,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: WS.fontBody,
      }}
    >
      <Box aria-hidden component="img" src={ASSETS.caseBtm} alt="" sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', maxHeight: 240, objectFit: 'cover', opacity: 0.45, pointerEvents: 'none' }} />

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.38fr 0.62fr' },
            gap: { xs: 4, lg: 4 },
            alignItems: 'center',
          }}
        >
          <Reveal>
            <Typography component="span" sx={wsToptitleSx}>
              {INSPIRED_CASES.eyebrow}
            </Typography>
            <Typography component="h2" sx={{ ...wsH2LightSx, mb: 3.5, maxWidth: 380 }}>
              Dive into ZeeShad{' '}
              <Box component="span" sx={{ color: WS.cyan }}>
                Remarkable Portfolio
              </Box>
            </Typography>
            <Box component={Link} href={INSPIRED_CASES.cta.href} sx={{ ...wsCommonBtnSx, mb: 2.5 }}>
              {INSPIRED_CASES.cta.label}
              <Box component="img" src={ASSETS.btnArrow} alt="" />
            </Box>
            <Box sx={{ display: 'flex', gap: 1.25 }}>
              <IconButton onClick={() => scrollBy(-1)} aria-label="Previous" sx={{ width: 48, height: 48, border: '1px solid rgba(255,255,255,0.25)', color: '#fff', '&:hover': { bgcolor: WS.orange, borderColor: WS.orange } }}>
                <ChevronLeft />
              </IconButton>
              <IconButton onClick={() => scrollBy(1)} aria-label="Next" sx={{ width: 48, height: 48, border: '1px solid rgba(255,255,255,0.25)', color: '#fff', '&:hover': { bgcolor: WS.orange, borderColor: WS.orange } }}>
                <ChevronRight />
              </IconButton>
            </Box>
          </Reveal>

          <Box
            ref={scroller}
            className="zs-h-scroll"
            sx={{
              display: 'flex',
              gap: 2.5,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              pb: 1,
              mx: { xs: -2, lg: 0 },
              px: { xs: 2, lg: 0 },
            }}
          >
            {INSPIRED_CASES.items.map((item) => (
              <Box
                key={item.title}
                component="article"
                sx={{
                  flex: '0 0 auto',
                  width: { xs: '85%', sm: 360, md: 400 },
                  scrollSnapAlign: 'start',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'transform 0.25s ease',
                  '&:hover': { transform: 'translateY(-6px)', '& img': { transform: 'scale(1.05)' } },
                }}
              >
                <Box sx={{ position: 'relative', height: { xs: 210, md: 250 }, overflow: 'hidden' }}>
                  <Image src={item.image} alt={item.title} fill unoptimized sizes="400px" style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                  <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(0,16,36,0.9) 100%)' }} />
                </Box>
                <Box sx={{ p: 2.75 }}>
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: WS.fontDisplay,
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      lineHeight: 1.4,
                      color: WS.white,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
