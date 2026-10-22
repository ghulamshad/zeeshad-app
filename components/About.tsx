'use client';

import { Container, Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 9, md: 11 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
            gap: { xs: 4, md: 7 },
            alignItems: 'center',
          }}
        >
          <Reveal>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Why ZeeShad
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              A prototype is easy. A system your team actually uses is the hard part.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.8, fontSize: '1.05rem' }}>
              ZeeShad (Private) Limited is a software and growth partner for scaling businesses. We
              build custom software, AI agents and automation—and we run performance marketing that
              fills the pipeline. Senior people scope the work, the same people build it, and you see
              working software every week.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 3.5, lineHeight: 1.8 }}>
              Serving clients across the US, UK and Europe. Business hours: Monday–Friday,
              09:00–18:00 Pakistan Standard Time (PKT, UTC+5). We aim to overlap UK afternoons and US
              Eastern mornings when your project needs it.
            </Typography>
            <Button component={Link} href="#contact" variant="contained" endIcon={<ArrowForward />}>
              Get my build plan
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 2,
              }}
            >
              {[
                { value: '2 days', label: 'to a written scope' },
                { value: 'Weekly', label: 'working demos' },
                { value: 'Yours', label: 'code and data' },
                { value: 'Fixed', label: 'price per milestone' },
              ].map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                      fontWeight: 800,
                      fontSize: '1.75rem',
                      color: 'primary.main',
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
