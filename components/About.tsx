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
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                bgcolor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 2, fontSize: '1.05rem' }}>
                How engagement works
              </Typography>
              {[
                'Named lead from day one — the people who scope also build.',
                'Written scope within 2 business days after Discovery.',
                'Weekly working demos instead of slide decks.',
                'You own the code, data and accounts from the first milestone.',
              ].map((line) => (
                <Box
                  key={line}
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    py: 1.5,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    color: 'text.secondary',
                    fontSize: '0.95rem',
                    lineHeight: 1.55,
                    '&::before': {
                      content: '""',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      mt: 0.85,
                      flexShrink: 0,
                    },
                  }}
                >
                  {line}
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
