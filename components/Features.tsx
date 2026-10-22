'use client';

import { Container, Box, Typography, Button, Chip } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import {
  FOUR_WAYS,
  PROBLEM_CARDS,
  SOLUTION_SERVICES,
  HOW_IT_WORKS,
  PRICING_MODELS,
  CTA_BAND,
  ESTIMATOR_BAND,
} from '@/lib/content/solutions';

export default function Features() {
  return (
    <>
      <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Reveal>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Four ways we help
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

      <Box component="section" id="solutions" sx={{ py: { xs: 9, md: 12 }, bgcolor: 'background.default', scrollMarginTop: 96 }}>
        <Container maxWidth="lg">
          <Reveal>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Business Solutions
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 640 }}>
              Systems that run the business
            </Typography>
            <Typography sx={{ color: 'text.secondary', maxWidth: 560, mb: 5, fontSize: '1.1rem' }}>
              Custom builds and AI where off-the-shelf tools fall short. Every Solutions page sells one
              next step: the Free Discovery Session.
            </Typography>
          </Reveal>

          <Typography variant="h3" component="h3" sx={{ mb: 2.5, fontSize: '1.25rem' }}>
            What is slowing you down?
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: 2,
              mb: { xs: 6, md: 8 },
            }}
          >
            {PROBLEM_CARDS.map((card) => (
              <Box
                key={card.problem}
                sx={{
                  p: 2.5,
                  borderRadius: 2.5,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography sx={{ color: 'text.secondary', mb: 1, fontSize: '0.925rem', lineHeight: 1.5 }}>
                  {card.problem}
                </Typography>
                <Typography sx={{ fontWeight: 700, color: 'primary.main', fontSize: '0.95rem' }}>
                  → {card.solution}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h3" component="h3" sx={{ mb: 2.5, fontSize: '1.25rem' }}>
            What we build
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
              gap: 2.5,
              mb: { xs: 7, md: 9 },
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

          <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
            How it works
          </Typography>
          <Typography variant="h3" component="h3" sx={{ mb: 3, fontSize: '1.35rem' }}>
            Five stages from discovery to support
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(5, 1fr)' },
              gap: 2,
              mb: { xs: 7, md: 9 },
            }}
          >
            {HOW_IT_WORKS.map((stage, i) => (
              <Box
                key={stage.stage}
                sx={{
                  p: 2.5,
                  borderRadius: 2.5,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography sx={{ color: 'primary.main', fontWeight: 800, mb: 1, fontSize: '0.85rem' }}>
                  0{i + 1}
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{stage.stage}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem', mb: 1.25 }}>
                  {stage.time}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {stage.line}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
            Engagement and pricing
          </Typography>
          <Typography variant="h3" component="h3" sx={{ mb: 3, fontSize: '1.35rem' }}>
            Three ways to work with us
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 2.5,
              mb: { xs: 6, md: 8 },
            }}
          >
            {PRICING_MODELS.map((model) => (
              <Box
                key={model.name}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: model.featured ? 'secondary.main' : 'background.paper',
                  color: model.featured ? '#fff' : 'text.primary',
                  border: model.featured ? 'none' : '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                {model.featured && (
                  <Chip
                    label="Most chosen"
                    size="small"
                    sx={{ mb: 1.5, bgcolor: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: 700 }}
                  />
                )}
                <Typography variant="h3" component="h3" sx={{ mb: 0.75, fontSize: '1.15rem', color: 'inherit' }}>
                  {model.name}
                </Typography>
                <Typography
                  sx={{
                    mb: 1.5,
                    fontWeight: 700,
                    color: model.featured ? 'rgba(255,255,255,0.75)' : 'primary.main',
                    fontSize: '0.9rem',
                  }}
                >
                  {model.priceLine}
                </Typography>
                <Typography
                  sx={{
                    mb: 2,
                    color: model.featured ? 'rgba(255,255,255,0.72)' : 'text.secondary',
                    fontSize: '0.925rem',
                    lineHeight: 1.65,
                  }}
                >
                  {model.description}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.25 }}>
                  {model.points.map((point) => (
                    <Box
                      component="li"
                      key={point}
                      sx={{
                        mb: 0.75,
                        color: model.featured ? 'rgba(255,255,255,0.8)' : 'text.secondary',
                        fontSize: '0.875rem',
                      }}
                    >
                      {point}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              bgcolor: 'solutions.light',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'center' },
              justifyContent: 'space-between',
              gap: 2.5,
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h3" component="h3" sx={{ mb: 0.75, fontSize: '1.25rem' }}>
                {CTA_BAND.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>{CTA_BAND.line}</Typography>
            </Box>
            <StackButtons />
          </Box>

          <Box
            sx={{
              p: { xs: 3, md: 3.5 },
              borderRadius: 3,
              border: '1px dashed',
              borderColor: 'primary.main',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Box>
              <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{ESTIMATOR_BAND.title}</Typography>
              <Typography sx={{ color: 'text.secondary' }}>{ESTIMATOR_BAND.line}</Typography>
            </Box>
            <Button component={Link} href="#contact" variant="outlined" endIcon={<ArrowForward />}>
              {ESTIMATOR_BAND.cta}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

function StackButtons() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.25, flexShrink: 0 }}>
      <Button component={Link} href="#contact" variant="contained" endIcon={<ArrowForward />}>
        {CTA_BAND.primary}
      </Button>
      <Button component={Link} href="#contact" variant="outlined">
        {CTA_BAND.secondary}
      </Button>
    </Box>
  );
}
