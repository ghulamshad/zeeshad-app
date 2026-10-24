'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { PROBLEM_PATHWAYS } from '@/lib/content/solutions';

export default function StandTodaySection() {
  return (
    <Box
      component="section"
      id="start-here"
      className="zs-stand-today"
      sx={{ py: { xs: 8, md: 11 }, bgcolor: '#F5F5F5', scrollMarginTop: 96 }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '0.1em',
              fontSize: '0.72rem',
              mb: 1.25,
              textTransform: 'uppercase',
            }}
          >
            Start here
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: '#0E251D',
              mb: 1,
              maxWidth: 560,
              fontSize: { xs: '1.75rem', md: '2.35rem' },
              fontWeight: 800,
              letterSpacing: '-0.03em',
            }}
          >
            Where does your team stand today?
          </Typography>
          <Typography sx={{ color: '#505050', mb: 4.5, maxWidth: 420, lineHeight: 1.65 }}>
            Pick the one that sounds like you.
          </Typography>
        </Reveal>

        <Stagger>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.35fr 1fr' },
              gap: 2,
              mb: 2,
            }}
          >
            {PROBLEM_PATHWAYS.slice(0, 2).map((item, i) => (
              <StaggerItem key={item.label}>
                <Box
                  component="article"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    bgcolor: '#fff',
                    border: '1px solid #E8E8E8',
                    overflow: 'hidden',
                    minHeight: { md: i === 0 ? 360 : 320 },
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      flex: 1,
                      minHeight: 160,
                      bgcolor: i === 0 ? '#EAF0FF' : '#E7F6EE',
                      backgroundImage:
                        i === 0
                          ? 'linear-gradient(145deg, #EAF0FF 0%, #F5F5F5 55%, #fff 100%)'
                          : 'linear-gradient(145deg, #E7F6EE 0%, #F5F5F5 55%, #fff 100%)',
                      position: 'relative',
                      p: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 800,
                        fontSize: '1.05rem',
                        color: '#0E251D',
                        fontStyle: 'italic',
                        maxWidth: 280,
                        lineHeight: 1.4,
                      }}
                    >
                      “{item.quote}”
                    </Typography>
                  </Box>
                  <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Typography
                      component="h3"
                      sx={{ fontWeight: 800, fontSize: '1.15rem', color: '#0E251D', letterSpacing: '-0.02em' }}
                    >
                      {item.label}
                    </Typography>
                    <Typography sx={{ color: '#505050', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>
                      {item.outcome}
                    </Typography>
                    <Button
                      component={Link}
                      href={item.href}
                      endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
                      sx={{ alignSelf: 'flex-start', fontWeight: 700, textTransform: 'none', px: 0 }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </StaggerItem>
            ))}
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            {PROBLEM_PATHWAYS.slice(2).map((item) => (
              <StaggerItem key={item.label}>
                <Box
                  component="article"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    bgcolor: '#fff',
                    border: '1px solid #E8E8E8',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      minHeight: 120,
                      backgroundImage: 'linear-gradient(145deg, #F1EDFC 0%, #F5F5F5 60%, #fff 100%)',
                      p: 2.5,
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, fontStyle: 'italic', color: '#0E251D', maxWidth: 260 }}>
                      “{item.quote}”
                    </Typography>
                  </Box>
                  <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                    <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#0E251D' }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ color: '#505050', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                      {item.outcome}
                    </Typography>
                    <Button
                      component={Link}
                      href={item.href}
                      endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
                      sx={{ alignSelf: 'flex-start', fontWeight: 700, textTransform: 'none', px: 0 }}
                    >
                      Learn more
                    </Button>
                  </Box>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>
      </Container>
    </Box>
  );
}
