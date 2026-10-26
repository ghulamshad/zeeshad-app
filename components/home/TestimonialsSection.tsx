'use client';

import { useRef } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { ASSETS, INSPIRED_TESTIMONIALS } from '@/lib/content/inspiredHome';
import { WS, wsBodySx, wsH2Sx, wsToptitleSx } from '@/lib/wsDesign';

export default function TestimonialsSection() {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: -1 | 1) => {
    scroller.current?.scrollBy({ left: dir * 490, behavior: 'smooth' });
  };

  return (
    <Box component="section" sx={{ pt: { xs: 8, md: '100px' }, pb: { xs: 8, md: 10 }, bgcolor: WS.white, position: 'relative', overflow: 'hidden', fontFamily: WS.fontBody }}>
      <Box aria-hidden component="img" src={ASSETS.testimonialGlow} alt="" sx={{ position: 'absolute', left: -120, top: 0, width: { xs: 280, md: 460 }, opacity: 0.5, pointerEvents: 'none' }} />
      <Box aria-hidden sx={{ position: 'absolute', right: -30, bottom: 60, width: 200, height: 200, opacity: 0.4, display: { xs: 'none', md: 'block' } }}>
        <Image src={ASSETS.testimonialRound} alt="" fill unoptimized style={{ objectFit: 'contain' }} />
      </Box>

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, gap: 3, mb: 2 }}>
          <Reveal>
            <Box sx={{ maxWidth: 560 }}>
              <Typography component="span" sx={wsToptitleSx}>
                {INSPIRED_TESTIMONIALS.eyebrow}
              </Typography>
              <Typography component="h2" sx={{ ...wsH2Sx, mb: 2 }}>
                What Our Client Say{' '}
                <Box component="span" sx={{ color: WS.cyan }}>
                  About ZeeShad
                </Box>
              </Typography>
              <Typography sx={wsBodySx}>{INSPIRED_TESTIMONIALS.body}</Typography>
            </Box>
          </Reveal>
          <Box sx={{ display: 'flex', gap: 0.75, flexShrink: 0 }}>
            <IconButton
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              sx={{
                width: 50,
                height: 50,
                bgcolor: '#EFEFEF',
                color: WS.slate,
                '&:hover': { bgcolor: WS.orange, color: '#fff' },
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => scrollBy(1)}
              aria-label="Next"
              sx={{
                width: 50,
                height: 50,
                bgcolor: '#EFEFEF',
                color: WS.slate,
                '&:hover': { bgcolor: WS.orange, color: '#fff' },
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>

        <Box
          ref={scroller}
          className="zs-h-scroll"
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            pt: '28px',
            pb: 1,
            mx: { xs: -2, md: 0 },
            px: { xs: 2, md: 0 },
          }}
        >
          {INSPIRED_TESTIMONIALS.items.map((t) => (
            <Box
              key={t.name}
              sx={{
                flex: '0 0 auto',
                width: { xs: '88%', sm: 460, md: 490 },
                scrollSnapAlign: 'start',
                px: { xs: 1, md: '14px' },
                py: '30px',
                boxSizing: 'border-box',
              }}
            >
              <Box
                component="blockquote"
                sx={{
                  m: 0,
                  position: 'relative',
                  p: { xs: '22px 22px 90px', md: '26px 30px 110px' },
                  borderRadius: '20px',
                  bgcolor: WS.white,
                  boxShadow: '0 10px 18px rgba(54,116,185,0.18)',
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: { xs: 320, md: 370 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    pr: { xs: '100px', md: '240px' },
                    height: { md: 280 },
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    component="svg"
                    aria-hidden
                    viewBox="0 0 70 50"
                    sx={{ width: { xs: 48, md: 60 }, height: { xs: 34, md: 43 }, mb: '13px', flexShrink: 0, display: 'block' }}
                  >
                    <path
                      fill={WS.cyan}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.7774 36.2852C12.2442 39.835 7.4577 43.6515 0.941298 46.8347C-0.751966 47.6614 0.00800299 50.2213 1.88126 49.9846C15.574 48.2514 24.447 42.2549 29.2968 33.3386C31.0967 30.0188 32.23 26.4889 32.8333 22.8857C33.2333 20.5092 33.3366 18.7259 33.3366 16.666C33.3366 12.2459 31.5808 8.00683 28.4553 4.88135C25.3298 1.75588 21.0907 0 16.6707 0C12.2506 0 8.01155 1.75588 4.88607 4.88135C1.7606 8.00683 0.00471497 12.2459 0.00471497 16.666C0.00471497 20.089 1.07053 23.312 2.95063 25.999C4.71968 28.5285 7.27836 30.5576 10.3498 31.8957C12.0045 32.6163 13.5468 33.9421 14.7774 36.2852ZM51.4474 36.2852C48.9142 39.835 44.1277 43.6515 37.6113 46.8347C35.918 47.6614 36.678 50.2213 38.5512 49.9846C52.244 48.2514 61.117 42.2549 65.9668 33.3386C67.7667 30.0188 68.9 26.4889 69.5033 22.8857C69.9033 20.5092 70.0066 18.7259 70.0066 16.666C70.0066 12.2459 68.2508 8.00683 65.1253 4.88135C61.9998 1.75588 57.7607 0 53.3407 0C48.9206 0 44.6816 1.75588 41.5561 4.88135C38.4306 8.00683 36.6747 12.2459 36.6747 16.666C36.6747 20.089 37.7405 23.312 39.6206 25.999C41.3897 28.5285 43.9484 30.5576 47.0198 31.8957C48.6745 32.6163 50.2168 33.9421 51.4474 36.2852Z"
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: WS.fontBody,
                      fontSize: { xs: '14px', md: '15px' },
                      lineHeight: { xs: '21px', md: '22.5px' },
                      color: WS.slate,
                      m: 0,
                      flex: 1,
                    }}
                  >
                    {t.quote}
                  </Typography>
                  <Box sx={{ pt: '24px', flexShrink: 0 }}>
                    <Typography
                      component="span"
                      sx={{
                        display: 'block',
                        fontFamily: WS.fontDisplay,
                        fontWeight: 700,
                        fontSize: { xs: '18px', md: '24px' },
                        lineHeight: 1.1,
                        letterSpacing: '-0.01em',
                        textTransform: 'capitalize',
                        color: WS.ink,
                        mb: '2px',
                      }}
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: WS.fontBody,
                        fontSize: { xs: '14px', md: '16px' },
                        lineHeight: 1.4,
                        color: WS.ink,
                        m: 0,
                      }}
                    >
                      {t.role}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: -36, md: -49 },
                    right: { xs: -70, md: -95 },
                    width: { xs: 220, md: 328 },
                    height: { xs: 220, md: 328 },
                    borderRadius: '50%',
                    overflow: 'hidden',
                    zIndex: 2,
                  }}
                >
                  <Image src={t.image} alt={t.name} fill unoptimized sizes="328px" style={{ objectFit: 'cover' }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
