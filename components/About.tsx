'use client';

import { Container, Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { COMPANY, COMPANY_OVERVIEW, HOW_WE_WORK } from '@/lib/content/site';

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
              Company
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              {COMPANY_OVERVIEW.headline}
            </Typography>
            {COMPANY_OVERVIEW.paragraphs.map((p) => (
              <Typography
                key={p.slice(0, 24)}
                sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.8, fontSize: '1.05rem' }}
              >
                {p}
              </Typography>
            ))}
            <Typography sx={{ color: 'text.secondary', mb: 3.5, lineHeight: 1.8 }}>
              Business hours: {COMPANY.hours}.
            </Typography>
            <Button component={Link} href="/company" variant="contained" endIcon={<ArrowForward />}>
              About the company
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
              {HOW_WE_WORK.map((item) => (
                <Box
                  key={item.title}
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
                  <Box>
                    <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {item.title}.{' '}
                    </Box>
                    {item.line}
                  </Box>
                </Box>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
