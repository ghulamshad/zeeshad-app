'use client';

import { Container, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 9, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Reveal>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4 / 3',
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'grey.200',
              }}
            >
              <Image
                src="/images/brand/studio-desk.jpg"
                alt="ZeeShad studio desk with architecture planning materials"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Reveal>

          <Reveal delay={0.1}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              About ZeeShad
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              A Karachi-based partner for systems, growth and clarity.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.8 }}>
              ZeeShad (Private) Limited helps growing businesses through three service lines:
              Business Solutions, Digital Marketing and Consultancy. We keep the offer focused so
              delivery stays accountable—when you talk to us, you talk to the people who will scope
              and do the work.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.8 }}>
              Business Solutions cover the software and process systems that run day-to-day
              operations. Digital Marketing builds demand with strategy, channels and measurement.
              Consultancy gives you independent guidance on technology, operations and growth before
              you commit budget.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Prefer clear scopes, written estimates and remote collaboration across time zones.
              Business hours: Monday–Friday, 09:00–18:00 Pakistan Standard Time (PKT, UTC+5). We aim
              to overlap UK afternoons and US Eastern mornings when your project needs it.
            </Typography>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
