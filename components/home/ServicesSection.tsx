'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { SOLUTION_PILLARS } from '@/lib/content/site';

const EXTRA_SERVICES = [
  {
    title: 'System integration',
    desc: 'CRM, accounts, warehouse and sales share one record—so nobody re-types the same order three times.',
    href: '/solutions#custom-software-saas',
    tint: '#FFF1E8',
  },
  {
    title: 'Custom software development',
    desc: 'Build from scratch or replace per-seat tools with software you own—scoped before we write code.',
    href: '/solutions#custom-software-saas',
    tint: '#EAF0FF',
  },
] as const;

const MORE_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Company', href: '/company' },
] as const;

const PILLAR_TINTS = ['#EAF0FF', '#E7F6EE', '#F1EDFC'] as const;

export default function ServicesSection() {
  const cards = [
    ...SOLUTION_PILLARS.map((p, i) => ({
      title: p.title,
      desc: p.outcome,
      href: p.href,
      tint: PILLAR_TINTS[i % PILLAR_TINTS.length],
    })),
    ...EXTRA_SERVICES,
  ];

  return (
    <Box component="section" id="services" className="zs-services" sx={{ py: { xs: 8, md: 11 }, bgcolor: '#F5F5F5' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { md: 'flex-end' },
              gap: 2,
              mb: 4.5,
            }}
          >
            <Box>
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
                Our Services
              </Typography>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  color: '#0E251D',
                  mb: 1,
                  maxWidth: 480,
                }}
              >
                Services that deliver value at scale
              </Typography>
              <Typography sx={{ color: '#505050', maxWidth: 480, lineHeight: 1.65 }}>
                Each service fixes a real problem your team deals with every day—built with a named lead and written
                scope.
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/solutions"
              variant="outlined"
              endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
              sx={{ alignSelf: { xs: 'flex-start', md: 'auto' }, fontWeight: 700, textTransform: 'none', borderRadius: 1 }}
            >
              Explore all services
            </Button>
          </Box>
        </Reveal>

        <Stagger>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {cards.map((card) => (
              <StaggerItem key={card.title}>
                <Box
                  component="article"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#fff',
                    borderRadius: 2,
                    border: '1px solid #E8E8E8',
                    overflow: 'hidden',
                  }}
                >
                  <Box aria-hidden sx={{ minHeight: 140, bgcolor: card.tint, backgroundImage: `linear-gradient(160deg, ${card.tint} 0%, #fff 90%)` }} />
                  <Box sx={{ p: 2.75, display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
                    <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.1rem', color: '#0E251D' }}>
                      {card.title}
                    </Typography>
                    <Typography sx={{ color: '#505050', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                      {card.desc}
                    </Typography>
                    <Button
                      component={Link}
                      href={card.href}
                      variant="contained"
                      size="small"
                      endIcon={<ArrowForward sx={{ fontSize: 13 }} />}
                      sx={{ alignSelf: 'flex-start', fontWeight: 700, textTransform: 'none', borderRadius: 1 }}
                    >
                      Explore more
                    </Button>
                  </Box>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>

        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', color: '#505050', mb: 1.5 }}>More</Typography>
          <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {MORE_LINKS.map((link) => (
              <Box component="li" key={link.href}>
                <Button
                  component={Link}
                  href={link.href}
                  size="small"
                  sx={{
                    bgcolor: '#fff',
                    border: '1px solid #E0E0E0',
                    borderRadius: 999,
                    px: 1.75,
                    py: 0.75,
                    fontWeight: 700,
                    color: '#0E251D',
                    textTransform: 'none',
                    '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
                  }}
                >
                  {link.label}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
