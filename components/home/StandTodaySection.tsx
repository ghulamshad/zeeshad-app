'use client';

import { Box, Container, Typography } from '@mui/material';
import { Reveal } from '@/components/Motion';
import { ASSETS, INSPIRED_STATS } from '@/lib/content/inspiredHome';
import { WS, wsBodySx, wsH2Sx, wsToptitleSx } from '@/lib/wsDesign';

export default function StandTodaySection() {
  return (
    <Box
      component="section"
      id="stats"
      sx={{
        pt: { xs: '60px', md: '85px' },
        pb: { xs: '60px', md: '110px' },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: WS.mist,
        fontFamily: WS.fontBody,
      }}
    >
      <Box
        aria-hidden
        component="img"
        src={ASSETS.statsBg}
        alt=""
        sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
      />
      <Box
        aria-hidden
        component="img"
        src={ASSETS.statsDot}
        alt=""
        sx={{
          position: 'absolute',
          right: { xs: -40, md: 0 },
          bottom: { xs: -30, md: -20 },
          width: { xs: 120, md: 180 },
          opacity: 0.22,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box aria-hidden component="img" src={ASSETS.statsBlur} alt="" sx={{ position: 'absolute', left: -100, bottom: -40, width: 340, opacity: 0.4, pointerEvents: 'none', zIndex: 0 }} />

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { lg: 'center' },
            gap: { xs: 4, lg: 0 },
            mx: { lg: '-29px' },
          }}
        >
          {/* Left: 2×2 card grid */}
          <Box sx={{ width: { lg: '55%' }, px: { lg: '29px' }, position: 'relative' }}>
            <Box aria-hidden component="img" src={ASSETS.statsOval} alt="" sx={{ position: 'absolute', right: -10, bottom: -20, width: 210, opacity: 0.3, pointerEvents: 'none', display: { xs: 'none', md: 'block' } }} />
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: { xs: 1.5, sm: 2 },
              }}
            >
              {INSPIRED_STATS.cards.map((card) => (
                <Box
                  key={card.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    bgcolor: WS.white,
                    borderRadius: '13px',
                    pl: { xs: '18px', md: '22px' },
                    pr: '12px',
                    py: { xs: '20px', md: '28px' },
                    minHeight: { xs: 110, md: 130 },
                    boxShadow: '0 10px 30px rgba(54,116,185,0.06)',
                    height: '100%',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      minWidth: { xs: 88, md: 112 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: { xs: 80, md: 97 },
                        height: { xs: 80, md: 97 },
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '50%',
                        bgcolor: WS.circle,
                        zIndex: 0,
                      },
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        fontFamily: WS.fontDisplay,
                        fontWeight: 700,
                        fontSize: { xs: '30px', md: '37px' },
                        lineHeight: 1,
                        letterSpacing: '-0.37px',
                        color: WS.numBlue,
                      }}
                    >
                      {card.value}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: WS.fontBody,
                      fontWeight: 600,
                      fontSize: { xs: '12.5px', md: '13px' },
                      lineHeight: 1.5,
                      color: WS.ink,
                    }}
                  >
                    {card.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right: copy */}
          <Box sx={{ width: { lg: '45%' }, px: { lg: '29px' } }}>
            <Reveal>
              <Typography component="span" sx={wsToptitleSx}>
                {INSPIRED_STATS.eyebrow}
              </Typography>
              <Typography component="h2" sx={{ ...wsH2Sx, mb: '25px' }}>
                {INSPIRED_STATS.title}{' '}
                <Box component="span" sx={{ color: WS.cyan }}>
                  {INSPIRED_STATS.titleAccent}
                </Box>
              </Typography>
              <Typography sx={wsBodySx}>{INSPIRED_STATS.body}</Typography>
            </Reveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
