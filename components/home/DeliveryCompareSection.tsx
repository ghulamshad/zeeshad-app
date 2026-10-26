'use client';

import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { ASSETS, INSPIRED_ROI } from '@/lib/content/inspiredHome';
import { WS, wsCommonBtnSx, wsH2Sx, wsToptitleSx } from '@/lib/wsDesign';

export default function DeliveryCompareSection() {
  const titleParts = INSPIRED_ROI.title.split('Digital Transformation');

  return (
    <Box
      component="section"
      sx={{
        py: { xs: '48px', sm: '60px', md: '100px' },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#EDF1F9',
        fontFamily: WS.fontBody,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5%',
          background: 'linear-gradient(rgb(255,255,255) 0%, rgba(237,240,249,0) 100%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        component="img"
        src={ASSETS.roiBg}
        alt=""
        sx={{
          position: 'absolute',
          inset: 'auto 0 0',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.6,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, sm: 2.5, md: 1.5 } }}>
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: { xs: 2.5, md: 0 }, px: { xs: 0.5, md: 0 } }}>
            <Typography component="span" sx={{ ...wsToptitleSx, fontSize: { xs: '14px', md: '18px' } }}>
              {INSPIRED_ROI.eyebrow}
            </Typography>
            <Typography
              component="h2"
              sx={{
                ...wsH2Sx,
                textAlign: 'center',
                fontSize: { xs: '1.65rem', sm: '2rem', md: '50px' },
                lineHeight: { xs: 1.2, md: '52.5px' },
              }}
            >
              {titleParts[0]}
              <Box component="span" sx={{ color: WS.cyan }}>
                Digital Transformation
              </Box>
            </Typography>
          </Box>
        </Reveal>

        <Box sx={{ pt: { xs: 2, md: '26px' } }}>
          <Stagger style={{ height: '100%' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                gap: { xs: 2, sm: 2.5, md: '30px' },
                alignItems: 'stretch',
              }}
            >
              {INSPIRED_ROI.items.map((item) => (
                <StaggerItem key={item.title} style={{ height: '100%', display: 'flex' }}>
                  <Box
                    sx={{
                      p: '1px',
                      width: '100%',
                      height: '100%',
                      borderRadius: '14px',
                      background: `linear-gradient(158deg, ${WS.cyan} 20%, rgba(255,255,255,0) 69%)`,
                      boxShadow: { xs: '0 24px 40px rgba(54,116,185,0.12)', md: '0 66.67px 64.3px rgba(54,116,185,0.16)' },
                      display: 'flex',
                    }}
                  >
                    <Box
                      sx={{
                        p: { xs: '22px 18px 24px', sm: '26px', md: '28px 28px 33px' },
                        bgcolor: WS.white,
                        borderRadius: '13px',
                        textAlign: 'center',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'rgba(36,87,245,0.1)',
                          borderRadius: '10px',
                          px: { xs: '12px', md: '15px' },
                          py: '8px',
                          width: '100%',
                          maxWidth: 280,
                          mb: { xs: '18px', md: '30px' },
                          color: WS.numBlue,
                          fontFamily: WS.fontBody,
                          fontWeight: 600,
                          fontSize: { xs: '13px', sm: '14px', md: '16px' },
                          lineHeight: 1,
                          textTransform: 'uppercase',
                          flexShrink: 0,
                        }}
                      >
                        <Box sx={{ position: 'relative', width: { xs: 20, md: 25 }, height: { xs: 20, md: 25 }, mr: '6px', flexShrink: 0 }}>
                          <Image src={item.icon} alt="" fill unoptimized style={{ objectFit: 'contain' }} />
                        </Box>
                        <Typography component="span" sx={{ font: 'inherit', color: 'inherit' }}>
                          {item.eyebrow}
                        </Typography>
                      </Box>

                      <Typography
                        component="h3"
                        sx={{
                          fontFamily: WS.fontDisplay,
                          fontWeight: 700,
                          fontSize: { xs: '17px', sm: '18px', md: '24px' },
                          lineHeight: 1.25,
                          letterSpacing: '-0.01em',
                          textTransform: 'capitalize',
                          color: WS.ink,
                          m: 0,
                          mb: '8px',
                          flexShrink: 0,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: WS.fontBody,
                          fontSize: { xs: '14px', md: '16px' },
                          lineHeight: { xs: '22px', md: '24px' },
                          color: WS.slate,
                          m: 0,
                          flex: 1,
                        }}
                      >
                        {item.body}
                      </Typography>
                    </Box>
                  </Box>
                </StaggerItem>
              ))}
            </Box>
          </Stagger>
        </Box>

        <Box sx={{ textAlign: 'center', mt: { xs: 3.5, md: '48px' } }}>
          <Box
            component={Link}
            href={INSPIRED_ROI.cta.href}
            sx={{
              ...wsCommonBtnSx,
              width: { xs: '100%', sm: 'auto' },
              minWidth: { xs: 0, sm: 223 },
              px: { xs: '22px', md: '28px' },
              py: { xs: '18px', md: '22px' },
              fontSize: { xs: '15px', md: '16px' },
              maxWidth: { xs: 360, sm: 'none' },
            }}
          >
            {INSPIRED_ROI.cta.label}
            <Box component="img" src={ASSETS.btnArrow} alt="" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
