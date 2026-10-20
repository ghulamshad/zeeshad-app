'use client';

import { Container, Box, Typography, Button, Divider } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';

const features = [
  {
    num: '01',
    title: 'Custom ERP Solutions',
    description:
      'Tailored enterprise resource planning systems that unify finance, inventory, HR, and operations.',
    points: [
      'Finance & accounting modules',
      'Inventory & supply chain',
      'HR & payroll integration',
      'Reporting & analytics',
    ],
  },
  {
    num: '02',
    title: 'SaaS MVP Builds',
    description:
      'From idea to launch: scoped, secure SaaS products with subscription and multi-tenant support.',
    points: [
      'Product discovery & scope',
      'Architecture & security',
      'Subscription & billing',
      'Launch & iteration',
    ],
  },
  {
    num: '03',
    title: 'E-commerce Systems',
    description:
      'Online stores and marketplaces with payments, fulfillment, and growth integrations.',
    points: [
      'Storefront & catalog',
      'Checkout & payments',
      'Multi-vendor marketplaces',
      'Integrations & APIs',
    ],
  },
  {
    num: '04',
    title: 'Business Automation',
    description:
      'Workflows, approvals, and system integrations so your team spends less time on manual work.',
    points: [
      'Workflow design & BPM',
      'Approvals & notifications',
      'System integrations',
      'Process analytics',
    ],
  },
];

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
            What we build
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 640 }}>
            Four things we actually deliver
          </Typography>
          <Typography
            sx={{ color: 'text.secondary', maxWidth: 560, mb: { xs: 5, md: 7 }, fontSize: '1.1rem' }}
          >
            Custom ERP, SaaS MVPs, e-commerce and automation—scoped clearly, built by the people
            you talk to.
          </Typography>
        </Reveal>

        <Stagger>
          {features.map((feature, index) => (
            <StaggerItem key={feature.num}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '88px 1fr 1fr' },
                  gap: { xs: 2, md: 4 },
                  py: { xs: 3.5, md: 4.5 },
                  alignItems: 'start',
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
                  {feature.num}
                </Typography>
                <Box>
                  <Typography variant="h3" component="h3" sx={{ mb: 1.25 }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </Box>
                <Box
                  component="ul"
                  sx={{
                    listStyle: 'none',
                    m: 0,
                    p: 0,
                    display: 'grid',
                    gap: 1,
                    pt: { md: 0.5 },
                  }}
                >
                  {feature.points.map((point) => (
                    <Box
                      component="li"
                      key={point}
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
                      {point}
                    </Box>
                  ))}
                </Box>
              </Box>
              {index < features.length - 1 && <Divider />}
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
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
                Need something specific?
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Not sure which of the four fits? Send a short brief—we will say clearly if we are
                the right team.
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
