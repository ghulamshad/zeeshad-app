'use client';

import { Container, Box, Typography, Button, Chip } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { SOLUTION_PILLARS } from '@/lib/content/site';
import { FOUR_WAYS, SOLUTION_SERVICES } from '@/lib/content/solutions';

export default function Features() {
  return (
    <>
      <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Reveal>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Where we help
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 560 }}>
              Pick the path that fits where you are
            </Typography>
          </Reveal>
          <Stagger>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
                gap: 2.5,
                mt: 4,
              }}
            >
              {FOUR_WAYS.map((item, i) => (
                <StaggerItem key={item.title}>
                  <Box
                    component={Link}
                    href={item.href}
                    sx={{
                      display: 'block',
                      height: '100%',
                      p: 3,
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      bgcolor: 'background.default',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'border-color 0.2s, transform 0.2s',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Typography sx={{ color: 'primary.main', fontWeight: 800, mb: 1.5, fontSize: '0.85rem' }}>
                      0{i + 1}
                    </Typography>
                    <Typography variant="h3" component="h3" sx={{ mb: 1.25, fontSize: '1.15rem' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2, fontSize: '0.925rem', lineHeight: 1.65 }}>
                      {item.line}
                    </Typography>
                    <Typography sx={{ color: 'primary.main', fontWeight: 700, fontSize: '0.9rem' }}>
                      Explore →
                    </Typography>
                  </Box>
                </StaggerItem>
              ))}
            </Box>
          </Stagger>
        </Container>
      </Box>

      <Box
        component="section"
        id="solutions"
        sx={{ py: { xs: 9, md: 12 }, bgcolor: 'background.default', scrollMarginTop: 96 }}
      >
        <Container maxWidth="lg">
          <Reveal>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Solutions
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 640 }}>
              Three offers with clear outcomes
            </Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 560, mb: 5, fontSize: '1.1rem' }}>
              Enterprise systems, custom software, and AI automation—scoped to the problem, not a
              laundry list of every IT service.
            </Typography>
          </Reveal>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 2.5,
              mb: { xs: 6, md: 8 },
            }}
          >
            {SOLUTION_PILLARS.map((pillar) => (
              <Box
                key={pillar.slug}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h3" component="h3" sx={{ mb: 1.25, fontSize: '1.2rem' }}>
                  {pillar.title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: '0.925rem', lineHeight: 1.6 }}>
                  <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Problem:{' '}
                  </Box>
                  {pillar.problem}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 2, fontSize: '0.925rem', lineHeight: 1.6 }}>
                  <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
                    Outcome:{' '}
                  </Box>
                  {pillar.outcome}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.25, mb: 2.5, flexGrow: 1 }}>
                  {pillar.deliverables.map((d) => (
                    <Box
                      component="li"
                      key={d}
                      sx={{ mb: 0.5, color: 'text.secondary', fontSize: '0.875rem' }}
                    >
                      {d}
                    </Box>
                  ))}
                </Box>
                <Button
                  component={Link}
                  href={pillar.href}
                  endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                  sx={{ alignSelf: 'flex-start', px: 0, fontWeight: 700 }}
                >
                  Learn more
                </Button>
              </Box>
            ))}
          </Box>

          <Typography variant="h3" component="h3" sx={{ mb: 2.5, fontSize: '1.25rem' }}>
            What we commonly build
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
              gap: 2.5,
              mb: 4,
            }}
          >
            {SOLUTION_SERVICES.map((service) => (
              <Box
                key={service.name}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Chip
                  label={service.group}
                  size="small"
                  sx={{
                    mb: 1.5,
                    fontWeight: 700,
                    bgcolor: 'solutions.light',
                    color: 'primary.dark',
                    height: 26,
                  }}
                />
                <Typography variant="h3" component="h3" sx={{ mb: 1, fontSize: '1.1rem' }}>
                  {service.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.925rem', lineHeight: 1.65 }}>
                  {service.summary}
                </Typography>
              </Box>
            ))}
          </Box>

          <Button component={Link} href="/solutions" variant="contained" endIcon={<ArrowForward />}>
            Explore Our Solutions
          </Button>
        </Container>
      </Box>
    </>
  );
}
