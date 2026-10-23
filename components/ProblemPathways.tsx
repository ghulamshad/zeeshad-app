'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { PROBLEM_PATHWAYS } from '@/lib/content/solutions';

export default function ProblemPathways() {
  return (
    <Box
      component="section"
      id="start-here"
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: 'secondary.main',
        color: '#fff',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            sx={{
              color: '#A8C0FF',
              fontWeight: 800,
              letterSpacing: '0.12em',
              fontSize: '0.72rem',
              mb: 1.5,
              textTransform: 'uppercase',
            }}
          >
            Start here_
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{ color: '#fff', mb: 1.5, maxWidth: 560, fontSize: { xs: '1.75rem', md: '2.35rem' } }}
          >
            Where does your team stand today?
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.65)', mb: 4, maxWidth: 520, lineHeight: 1.7 }}>
            Pick the path that sounds like you. Each leads to a clear next step—not a generic brochure.
          </Typography>
        </Reveal>

        <Stagger>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2,
            }}
          >
            {PROBLEM_PATHWAYS.map((item, i) => (
              <StaggerItem key={item.label}>
                <Box
                  component={Link}
                  href={item.href}
                  sx={{
                    display: 'block',
                    height: '100%',
                    p: { xs: 2.75, md: 3.25 },
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.12)',
                    bgcolor: 'rgba(255,255,255,0.04)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s, background 0.2s',
                    '&:hover': {
                      borderColor: 'rgba(168,192,255,0.55)',
                      bgcolor: 'rgba(36,87,245,0.18)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: '#A8C0FF',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                      letterSpacing: '0.1em',
                      mb: 1.5,
                      textTransform: 'uppercase',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}_ {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.88)',
                      mb: 1.5,
                      fontSize: '1.05rem',
                      lineHeight: 1.45,
                    }}
                  >
                    “{item.quote}”
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                    {item.outcome}
                  </Typography>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>

        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{ px: 3, py: 1.4 }}
          >
            Book a discovery conversation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
