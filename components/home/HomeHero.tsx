'use client';

import { useState } from 'react';
import { Box, Container, Typography, Button, Stack, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { validateEmail } from '@/lib/utils';
import { CLIENTS, HOME_HERO, HOME_HERO_TAGS, PROOF_METRICS, PROOF_RECOGNITIONS } from '@/lib/content/site';
import { HOME_HERO as MKT_HERO } from '@/lib/content/marketing';

export default function HomeHero() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [activeTag, setActiveTag] = useState(0);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !validateEmail(email)) {
      setFeedback('Enter a valid work email.');
      return;
    }
    setFeedback('');
    router.push(`/contact?interest=${encodeURIComponent('Not sure yet')}&email=${encodeURIComponent(email.trim())}`);
  };

  return (
    <Box
      component="section"
      className="zs-home-hero"
      sx={{ bgcolor: '#F5F5F5', pt: { xs: 5, md: 7 }, pb: { xs: 4, md: 5 }, overflow: 'hidden' }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' },
            gap: { xs: 4, lg: 5 },
            alignItems: 'start',
          }}
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.15rem', md: '3.1rem' },
                letterSpacing: '-0.035em',
                lineHeight: 1.08,
                color: '#0E251D',
                mb: 2,
                maxWidth: 560,
              }}
            >
              {HOME_HERO.h1}{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                {HOME_HERO.h1Accent}
              </Box>
            </Typography>
            <Typography sx={{ color: '#505050', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.65, mb: 3, maxWidth: 520 }}>
              {HOME_HERO.body}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 1.5 }}>
              <Button
                component={Link}
                href={HOME_HERO.primaryCta.href}
                variant="contained"
                sx={{ px: 2.5, py: 1.25, borderRadius: 1, fontWeight: 700 }}
              >
                {HOME_HERO.primaryCta.label}
              </Button>
              <Button
                component={Link}
                href={HOME_HERO.secondaryCta.href}
                variant="outlined"
                sx={{ px: 2.5, py: 1.25, borderRadius: 1, fontWeight: 700 }}
              >
                {HOME_HERO.secondaryCta.label}
              </Button>
            </Stack>
            <Typography sx={{ color: '#8A8A8A', fontSize: '0.85rem', mb: 3, maxWidth: 480, lineHeight: 1.5 }}>
              {MKT_HERO.underButtons}
            </Typography>

            <Stack direction="row" flexWrap="wrap" spacing={1.5} useFlexGap sx={{ mb: 3.5 }}>
              {PROOF_RECOGNITIONS.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    px: 1.5,
                    py: 0.85,
                    borderRadius: 1,
                    border: '1px dashed #D5D5D5',
                    bgcolor: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#505050',
                  }}
                >
                  {item.label}
                </Box>
              ))}
            </Stack>

            <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: { xs: 2, sm: 3 } }}>
              {PROOF_METRICS.map((m) => (
                <Box component="li" key={m.label} sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.25rem', color: '#0E251D' }}>{m.value}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#505050', maxWidth: 140, lineHeight: 1.3 }}>
                    {m.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ position: 'relative', minHeight: { xs: 280, md: 360 } }}>
            <Stack spacing={1} sx={{ mb: 3 }}>
              {HOME_HERO_TAGS.map((tag, i) => (
                <Button
                  key={tag.label}
                  component={Link}
                  href={tag.href}
                  onMouseEnter={() => setActiveTag(i)}
                  variant="outlined"
                  size="small"
                  sx={{
                    justifyContent: 'flex-start',
                    bgcolor: activeTag === i ? '#fff' : 'rgba(255,255,255,0.7)',
                    borderColor: activeTag === i ? 'primary.main' : '#D5D5D5',
                    color: '#0E251D',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    textTransform: 'none',
                    borderRadius: 999,
                    px: 1.75,
                    py: 0.85,
                  }}
                >
                  {tag.label}
                </Button>
              ))}
            </Stack>
            <Box
              component="form"
              onSubmit={onSubmit}
              noValidate
              sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, maxWidth: 420 }}
            >
              <Box
                component="input"
                type="email"
                name="email"
                placeholder="Work email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                aria-label="Work email"
                sx={{
                  flex: 1,
                  px: 1.5,
                  py: 1.15,
                  borderRadius: 1,
                  border: '1px solid #D5D5D5',
                  bgcolor: '#fff',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                }}
              />
              <Button type="submit" variant="contained" sx={{ px: 2, fontWeight: 700, borderRadius: 1, whiteSpace: 'nowrap' }}>
                Book a Scoping Call
              </Button>
            </Box>
            <Typography role="status" sx={{ color: feedback ? 'error.main' : 'transparent', fontSize: '0.8rem', mt: 1, minHeight: 20 }}>
              {feedback || '.'}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 5, md: 6 } }} id="clients">
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#505050',
              mb: 2,
            }}
          >
            Trusted by
          </Typography>
          <Box className="zs-marquee" sx={{ overflow: 'hidden', position: 'relative' }}>
            <Box className="zs-marquee__track" component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <Box component="li" key={`${c.name}-${i}`} sx={{ px: 3, flexShrink: 0 }}>
                  <MuiLink
                    href={c.href}
                    sx={{
                      fontWeight: 800,
                      color: '#0E251D',
                      textDecoration: 'none',
                      opacity: 0.75,
                      fontSize: '1rem',
                      whiteSpace: 'nowrap',
                      '&:hover': { opacity: 1, color: 'primary.main' },
                    }}
                  >
                    {c.name}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
