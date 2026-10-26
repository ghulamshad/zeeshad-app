'use client';

import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { ASSETS, INSPIRED_SERVICES } from '@/lib/content/inspiredHome';
import { WS, wsCommonBtnSx, wsH2LightSx, wsToptitleSx } from '@/lib/wsDesign';

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <Box
      component="section"
      id="services"
      sx={{
        pt: { xs: 8, md: '149px' },
        pb: { xs: 8, md: '156px' },
        bgcolor: WS.dark,
        color: WS.white,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: WS.fontBody,
      }}
    >
      <Box aria-hidden component="img" src={ASSETS.servTop} alt="" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', maxHeight: 280, objectFit: 'cover', opacity: 0.7, pointerEvents: 'none' }} />
      <Box aria-hidden component="img" src={ASSETS.servRight} alt="" sx={{ position: 'absolute', right: 0, top: '15%', width: { md: 280 }, opacity: 0.6, pointerEvents: 'none', display: { xs: 'none', md: 'block' } }} />
      <Box aria-hidden component="img" src={ASSETS.servGlow} alt="" sx={{ position: 'absolute', right: -60, top: '25%', width: 340, opacity: 0.45, pointerEvents: 'none' }} />
      <Box aria-hidden component="img" src={ASSETS.servBtm} alt="" sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', maxHeight: 220, objectFit: 'cover', opacity: 0.55, pointerEvents: 'none' }} />
      <Box
        aria-hidden
        component="img"
        src={ASSETS.servBtmGlow}
        alt=""
        sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: { xs: '85%', sm: '70%', md: 720 },
          maxWidth: 720,
          opacity: { xs: 0.45, md: 0.65 },
          filter: 'blur(2px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Reveal>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { md: 'flex-end' },
              gap: 3,
              mb: { xs: 4, md: 6 },
            }}
          >
            <Box sx={{ maxWidth: 550 }}>
              <Typography component="span" sx={wsToptitleSx}>
                {INSPIRED_SERVICES.eyebrow}
              </Typography>
              <Typography component="h2" sx={wsH2LightSx}>
                {INSPIRED_SERVICES.title.split(' ').slice(0, -2).join(' ')}{' '}
                <Box component="span" sx={{ color: WS.cyan }}>
                  {INSPIRED_SERVICES.title.split(' ').slice(-2).join(' ')}
                </Box>
              </Typography>
            </Box>
            <Box component={Link} href={INSPIRED_SERVICES.cta.href} sx={wsCommonBtnSx}>
              {INSPIRED_SERVICES.cta.label}
              <Box component="img" src={ASSETS.btnArrow} alt="" />
            </Box>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            flexWrap: 'wrap',
            mx: { lg: '-33px' },
            alignItems: 'stretch',
          }}
        >
          {/* Left list ~68% */}
          <Box sx={{ width: { lg: '68%' }, px: { lg: '33px' }, order: { xs: 2, lg: 1 } }}>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                counterReset: 'service-counter',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
              }}
            >
              {INSPIRED_SERVICES.items.map((item, i) => {
                const isActive = active === i;
                return (
                  <Box
                    component="li"
                    key={`${item.title}-${i}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    sx={{
                      counterIncrement: 'service-counter',
                      cursor: 'pointer',
                    }}
                  >
                    <Box
                      component={Link}
                      href={item.href}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        textDecoration: 'none',
                        color: 'inherit',
                        position: 'relative',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '0 14px 14px 0',
                        borderLeft: isActive ? `3px solid ${WS.cyan}` : '3px solid transparent',
                        bgcolor: isActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                        pl: { xs: 2, md: 2.5 },
                        pr: { xs: 2, md: 2.5 },
                        py: { xs: 2, md: 2.5 },
                        minHeight: { md: 120 },
                        transition: 'border-color 0.25s, background-color 0.25s',
                      }}
                    >
                      <Box
                        aria-hidden
                        sx={{
                          position: 'relative',
                          display: 'inline-block',
                          mt: '-8px',
                          mr: '28px',
                          flexShrink: 0,
                          '&::before': {
                            content: 'counter(service-counter) ". "',
                            fontFamily: WS.fontBody,
                            fontSize: { xs: '40px', md: '56px' },
                            fontWeight: 700,
                            lineHeight: { xs: '60px', md: '84px' },
                            background: `linear-gradient(${WS.cyan} 15.38%, rgba(0, 16, 36, 0.9) 83%)`,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block',
                          },
                        }}
                      />
                      <Box sx={{ flex: 1, minWidth: 0, pt: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: isActive ? 1 : 0 }}>
                          <Typography
                            component="h3"
                            sx={{
                              fontFamily: WS.fontDisplay,
                              fontWeight: 700,
                              fontSize: { xs: '1.25rem', md: '30px' },
                              lineHeight: { md: '33px' },
                              letterSpacing: '-0.3px',
                              color: WS.white,
                              m: 0,
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Box
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: '50%',
                              bgcolor: WS.orange,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Box component="img" src={ASSETS.btnArrow} alt="" sx={{ width: 12, height: 12, filter: 'brightness(0) invert(1)' }} />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            maxHeight: isActive ? 80 : 0,
                            overflow: 'hidden',
                            opacity: isActive ? 1 : 0,
                            transition: 'max-height 0.3s ease, opacity 0.2s ease',
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: WS.fontBody,
                              fontSize: '16px',
                              lineHeight: '24px',
                              color: WS.white,
                              maxWidth: 465,
                              pr: 6,
                            }}
                          >
                            {item.body}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Right image ~32% */}
          <Box
            sx={{
              width: { lg: '32%' },
              px: { lg: '33px' },
              order: { xs: 1, lg: 2 },
              mb: { xs: 3, lg: 0 },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 280, md: 420, lg: 506 },
                borderRadius: '18px',
                overflow: 'hidden',
              }}
            >
              {INSPIRED_SERVICES.items.map((item, i) => (
                <Box
                  key={item.image}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: active === i ? 1 : 0,
                    transition: 'opacity 0.35s ease',
                  }}
                >
                  <Image src={item.image} alt={item.title} fill unoptimized sizes="422px" style={{ objectFit: 'cover' }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
