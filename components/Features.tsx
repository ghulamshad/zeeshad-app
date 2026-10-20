'use client';

import { Container, Box, Typography, Button, Divider } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { MAIN_SERVICES } from '@/lib/content/services';

export default function Features() {
  return (
    <Box
      component="section"
      id="features"
      sx={{
        py: { xs: 9, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
            Our services
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 720 }}>
            Three ways we help you grow
          </Typography>
          <Typography
            sx={{ color: 'text.secondary', maxWidth: 620, mb: { xs: 5, md: 7 }, fontSize: '1.1rem' }}
          >
            Business Solutions, Digital Marketing and Consultancy—each with clear sub-services so
            you know exactly what to brief and what we will deliver.
          </Typography>
        </Reveal>

        <Stagger>
          {MAIN_SERVICES.map((service, index) => (
            <StaggerItem key={service.id}>
              <Box
                id={service.id}
                sx={{
                  py: { xs: 4, md: 5.5 },
                  scrollMarginTop: 96,
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '88px 1fr' },
                    gap: { xs: 2, md: 4 },
                    mb: { xs: 3, md: 4 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-syne), Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                      color: 'primary.main',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                    }}
                  >
                    {service.num}
                  </Typography>
                  <Box>
                    <Typography variant="h3" component="h3" sx={{ mb: 0.75 }}>
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'primary.dark',
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: '0.95rem',
                      }}
                    >
                      {service.tagline}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.75, mb: 2.5, maxWidth: 720 }}>
                      {service.description}
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        listStyle: 'none',
                        m: 0,
                        p: 0,
                        display: 'grid',
                        gap: 1,
                        mb: { xs: 3, md: 4 },
                      }}
                    >
                      {service.outcomes.map((outcome) => (
                        <Box
                          component="li"
                          key={outcome}
                          sx={{
                            display: 'flex',
                            gap: 1.25,
                            color: 'text.secondary',
                            fontSize: '0.95rem',
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
                          {outcome}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                <Typography
                  variant="overline"
                  sx={{ display: 'block', color: 'text.secondary', mb: 2, ml: { md: '104px' } }}
                >
                  Sub-services
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
                    gap: 2.5,
                    ml: { md: '104px' },
                  }}
                >
                  {service.subServices.map((sub) => (
                    <Box
                      key={sub.name}
                      sx={{
                        p: 2.25,
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                        height: '100%',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-syne), Syne, sans-serif',
                          fontWeight: 650,
                          fontSize: '1rem',
                          mb: 1,
                          color: 'text.primary',
                        }}
                      >
                        {sub.name}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.65 }}>
                        {sub.summary}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              {index < MAIN_SERVICES.length - 1 && <Divider />}
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <Box
            sx={{
              mt: { xs: 5, md: 7 },
              pt: { xs: 4, md: 5 },
              borderTop: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'center' },
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Box sx={{ maxWidth: 520 }}>
              <Typography variant="h3" component="h3" sx={{ mb: 1, fontSize: '1.35rem' }}>
                Not sure where to start?
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Tell us your goal—we will recommend Business Solutions, Digital Marketing,
                Consultancy, or a practical mix, with a written scope and estimate.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="#contact"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{ alignSelf: { xs: 'stretch', sm: 'center' }, flexShrink: 0 }}
            >
              Request a scope & estimate
            </Button>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
