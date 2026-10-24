'use client';

import { Box, Container, Typography, Chip } from '@mui/material';
import { Reveal } from '@/components/Motion';
import { PROOF_DRAFT, PROOF_RECOGNITIONS } from '@/lib/content/site';

const PARTNERS_DRAFT = ['Cloud platform', 'CRM / SaaS', 'AI tooling', 'Payments', 'Analytics', 'Security'] as const;

export default function SecuritySection() {
  return (
    <Box component="section" className="zs-security" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#0E251D', color: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 800,
              letterSpacing: '0.1em',
              fontSize: '0.72rem',
              mb: 1.5,
              textTransform: 'uppercase',
            }}
          >
            Awards, certifications and partnerships
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontSize: { xs: '1.65rem', md: '2.15rem' },
              mb: 1,
              maxWidth: 560,
              lineHeight: 1.2,
            }}
          >
            Enterprise-grade delivery.
            <Box component="span" sx={{ display: 'block', color: 'rgba(255,255,255,0.7)' }}>
              Verified claims only.
            </Box>
          </Typography>
          {PROOF_DRAFT && (
            <Chip
              label="Draft layout — replace logos & certs when verified"
              size="small"
              sx={{ mt: 2, mb: 1, fontWeight: 700, bgcolor: 'rgba(255,255,255,0.12)', color: '#fff' }}
            />
          )}
        </Reveal>

        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            m: 0,
            mt: 4,
            p: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            justifyContent: 'flex-start',
          }}
        >
          {PARTNERS_DRAFT.map((label) => (
            <Box
              component="li"
              key={label}
              sx={{
                px: 2,
                py: 1.25,
                borderRadius: 1,
                border: '1px dashed rgba(255,255,255,0.25)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              {label}
            </Box>
          ))}
        </Box>

        <Box className="zs-marquee zs-marquee--dark" sx={{ mt: 4, overflow: 'hidden' }}>
          <Box className="zs-marquee__track" component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {[...PROOF_RECOGNITIONS, ...PROOF_RECOGNITIONS].map((item, i) => (
              <Box
                component="li"
                key={`${item.label}-${i}`}
                sx={{
                  flexShrink: 0,
                  mx: 1,
                  px: 2.5,
                  py: 2,
                  minWidth: 160,
                  borderRadius: 1.5,
                  bgcolor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 800, fontSize: '0.9rem', color: '#fff' }}>{item.label}</Typography>
                <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', mt: 0.5 }}>{item.note}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
