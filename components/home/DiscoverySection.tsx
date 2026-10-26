'use client';

import { useState } from 'react';
import { Box, Container, Typography, Link as MuiLink, Button } from '@mui/material';
import Image from 'next/image';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { ASSETS, INSPIRED_CONTACT } from '@/lib/content/inspiredHome';
import { COMPANY } from '@/lib/content/site';
import { SCOPING_QUIZ } from '@/lib/content/scopingQuiz';
import ScopingCallModal from '@/components/home/ScopingCallModal';
import { WS, wsH2LightSx } from '@/lib/wsDesign';

export default function DiscoverySection() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      component="section"
      id="discovery"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#EEF2F8',
        scrollMarginTop: 96,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: WS.fontBody,
      }}
    >
      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Box
          sx={{
            position: 'relative',
            borderRadius: { xs: '16px', md: '20px' },
            bgcolor: WS.white,
            boxShadow: '0 30px 80px rgba(11,19,36,0.12)',
            overflow: 'hidden',
          }}
        >
          <Box aria-hidden component="img" src={ASSETS.dot} alt="" sx={{ position: 'absolute', left: 18, top: 18, width: 56, opacity: 0.55, zIndex: 2, display: { xs: 'none', md: 'block' } }} />
          <Box aria-hidden component="img" src={ASSETS.dot} alt="" sx={{ position: 'absolute', right: 18, top: 18, width: 56, opacity: 0.55, zIndex: 2, display: { xs: 'none', md: 'block' } }} />

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, minHeight: { lg: 560 } }}>
            <Box
              sx={{
                position: 'relative',
                bgcolor: WS.cyan,
                color: WS.white,
                p: { xs: 3.5, md: 5.5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: { xs: 4, md: 5 },
                overflow: 'hidden',
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography component="h2" sx={{ ...wsH2LightSx, fontSize: { xs: '1.65rem', md: '40px' }, lineHeight: { md: '48px' }, mb: 2 }}>
                  {INSPIRED_CONTACT.title}
                </Typography>
                <Typography sx={{ fontFamily: WS.fontBody, color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: 440, fontSize: { xs: '15px', md: '16px' } }}>
                  {INSPIRED_CONTACT.body}
                </Typography>
              </Box>

              <Box sx={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: { xs: 3, md: 3.5 } }}>
                {INSPIRED_CONTACT.stats.map((s) => (
                  <Box key={s.label} sx={{ display: 'flex', gap: 1.75, alignItems: 'flex-start' }}>
                    <Box sx={{ position: 'relative', width: { xs: 44, md: 52 }, height: { xs: 44, md: 52 }, flexShrink: 0, mt: 0.25, filter: 'brightness(0) invert(1)' }}>
                      <Image src={s.icon} alt="" fill unoptimized style={{ objectFit: 'contain' }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontFamily: WS.fontDisplay, fontWeight: 700, fontSize: { xs: '32px', md: '40px' }, color: WS.white, lineHeight: 1.05, mb: 0.5 }}>
                        {s.value}
                      </Typography>
                      <Typography sx={{ fontFamily: WS.fontBody, fontSize: { xs: '14px', md: '15px' }, color: 'rgba(255,255,255,0.9)', fontWeight: 500, lineHeight: 1.35 }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                p: { xs: 3, md: 5 },
                bgcolor: WS.white,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  right: -40,
                  bottom: -40,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(36,87,245,0.12) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <Typography
                sx={{
                  fontFamily: WS.fontBody,
                  fontWeight: 500,
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: WS.orange,
                  mb: 1,
                }}
              >
                Get Started
              </Typography>
              <Typography sx={{ fontFamily: WS.fontDisplay, fontWeight: 700, fontSize: { xs: '1.55rem', md: '28px' }, color: WS.ink, mb: 1, letterSpacing: '-0.02em' }}>
                Ready to book your scoping call?
              </Typography>
              <Typography sx={{ fontFamily: WS.fontBody, color: WS.slate, mb: 3, lineHeight: 1.7, fontSize: '16px', maxWidth: 420 }}>
                Tell us a bit about yourself in a short guided popup — we&apos;ll qualify the fit and schedule a focused call.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3.5 }}>
                {['What describes you best', 'What you need help with', 'Your timeline & contact details'].map((line, i) => (
                  <Box key={line} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        bgcolor: 'rgba(36,87,245,0.1)',
                        color: WS.cyan,
                        fontFamily: WS.fontDisplay,
                        fontWeight: 700,
                        fontSize: '13px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </Box>
                    <Typography sx={{ fontFamily: WS.fontBody, fontSize: '15px', color: WS.ink, fontWeight: 500 }}>
                      {line}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  alignSelf: { xs: 'stretch', sm: 'flex-start' },
                  fontFamily: WS.fontBody,
                  fontWeight: 700,
                  fontSize: '16px',
                  textTransform: 'capitalize',
                  bgcolor: WS.cyan,
                  color: WS.white,
                  borderRadius: '100px',
                  px: 3.5,
                  py: 1.75,
                  boxShadow: 'none',
                  '&:hover': { bgcolor: WS.orange, boxShadow: 'none' },
                }}
              >
                {SCOPING_QUIZ.ctaOpen}
              </Button>

              <Typography sx={{ fontFamily: WS.fontBody, color: WS.slate, fontSize: '14px', mt: 3, lineHeight: 1.6 }}>
                Or reach us at{' '}
                <MuiLink href={`mailto:${COMPANY.email}`} sx={{ fontWeight: 700, color: WS.cyan }}>
                  {COMPANY.email}
                </MuiLink>
                {' · '}
                <MuiLink href={`tel:${COMPANY.phoneTel}`} sx={{ fontWeight: 700, color: WS.cyan }}>
                  {COMPANY.phoneDisplay}
                </MuiLink>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <ScopingCallModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
