'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { COMPANY, PROOF_DRAFT, PROOF_RECOGNITIONS } from '@/lib/content/site';
import ContactSection from '@/components/ContactSection';

const POINTS = [
  'Your biggest bottleneck, named',
  'A build, buy or automate recommendation',
  'A rough scope and timeline',
] as const;

export default function DiscoverySection() {
  return (
    <Box
      component="section"
      id="discovery"
      className="zs-discovery"
      sx={{ py: { xs: 8, md: 11 }, bgcolor: '#F5F5F5', scrollMarginTop: 96 }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.9fr 1.1fr' },
            gap: { xs: 4, lg: 5 },
            p: { xs: 2.5, md: 4 },
            borderRadius: 2,
            bgcolor: '#fff',
            border: '1px solid #E8E8E8',
          }}
        >
          <Reveal>
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
              Free discovery session
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.03em',
                fontSize: { xs: '1.65rem', md: '2.1rem' },
                color: '#0E251D',
                mb: 1.5,
                maxWidth: 360,
              }}
            >
              Book time with our team.
            </Typography>
            <Typography sx={{ color: '#505050', mb: 3, maxWidth: 380, lineHeight: 1.65 }}>
              You leave with a straight answer on what to build first—even if you don&apos;t build it with us.
            </Typography>

            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mb: 3.5 }}>
              {POINTS.map((point) => (
                <Box
                  component="li"
                  key={point}
                  sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 1.5 }}
                >
                  <CheckCircleOutline sx={{ color: 'primary.main', fontSize: 22, mt: 0.15 }} aria-hidden />
                  <Typography sx={{ fontWeight: 600, color: '#0E251D', fontSize: '0.95rem' }}>{point}</Typography>
                </Box>
              ))}
            </Box>

            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {PROOF_RECOGNITIONS.slice(0, 3).map((item) => (
                <Box
                  component="li"
                  key={item.label}
                  sx={{
                    px: 1.5,
                    py: 0.85,
                    borderRadius: 1,
                    border: '1px dashed #D5D5D5',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#505050',
                  }}
                >
                  {item.label}
                  {PROOF_DRAFT ? ' · draft' : ''}
                </Box>
              ))}
            </Box>

            <Typography sx={{ mt: 3, color: '#505050', fontSize: '0.85rem' }}>
              Or reach us at{' '}
              <MuiLink href={`mailto:${COMPANY.email}`} sx={{ fontWeight: 700 }}>
                {COMPANY.email}
              </MuiLink>
              {' · '}
              <MuiLink href={`tel:${COMPANY.phoneTel}`} sx={{ fontWeight: 700 }}>
                {COMPANY.phoneDisplay}
              </MuiLink>
            </Typography>
          </Reveal>

          <Box>
            <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.15rem', color: '#0E251D', mb: 0.5 }}>
              How can we help you?
            </Typography>
            <Typography sx={{ color: '#505050', mb: 2, fontSize: '0.9rem' }}>
              Get in touch. We&apos;d love to hear from you.
            </Typography>
            <ContactSection embedded />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
