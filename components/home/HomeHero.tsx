'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { validateEmail } from '@/lib/utils';
import {
  CLIENTS,
  HOME_HERO,
  HOME_HERO_TAGS,
  PROOF_DRAFT,
  PROOF_METRICS,
  PROOF_RECOGNITIONS,
} from '@/lib/content/site';

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
    router.push(`/contact?interest=${encodeURIComponent('Discuss a project')}&email=${encodeURIComponent(email.trim())}`);
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
                fontSize: { xs: '2.15rem', md: '3.25rem' },
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
            <Typography sx={{ color: '#505050', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.65, mb: 3, maxWidth: 480 }}>
              {HOME_HERO.body}
            </Typography>

            <Box
              component="form"
              onSubmit={onSubmit}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1,
                mb: 1,
                maxWidth: 480,
              }}
            >
              <TextField
                fullWidth
                type="email"
                name="email"
                label="Work email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                size="small"
                sx={{ bgcolor: '#fff', borderRadius: 1, '& .MuiOutlinedInput-root': { borderRadius: 1 } }}
              />
              <Button type="submit" variant="contained" sx={{ px: 2.5, py: 1.15, borderRadius: 1, whiteSpace: 'nowrap', fontWeight: 700 }}>
                {HOME_HERO.primaryCta.label}
              </Button>
            </Box>
            <Typography role="status" aria-live="polite" sx={{ color: feedback ? 'error.main' : 'text.secondary', fontSize: '0.8rem', mb: 3, minHeight: 20 }}>
              {feedback}
            </Typography>

            <Stack direction="row" flexWrap="wrap" spacing={1.5} useFlexGap sx={{ mb: 3.5 }}>
              {PROOF_RECOGNITIONS.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    px: 1.5,
                    py: 0.85,
                    borderRadius: 1,
                    border: '1px dashed',
                    borderColor: '#D5D5D5',
                    bgcolor: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#505050',
                  }}
                >
                  {item.label}
                  {PROOF_DRAFT ? ' · draft' : ''}
                </Box>
              ))}
            </Stack>

            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 2, sm: 3 },
              }}
            >
              {PROOF_METRICS.map((m) => (
                <Box component="li" key={m.label} sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.35rem', color: '#0E251D', letterSpacing: '-0.02em' }}>
                    {m.value}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#505050', maxWidth: 120, lineHeight: 1.3 }}>
                    {m.label.replace(/^Replace — /, '')}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box className="zs-home-hero__visual" sx={{ position: 'relative', minHeight: { xs: 320, md: 420 } }}>
            <Box
              aria-hidden
              className="zs-home-hero__wheel"
              sx={{
                width: { xs: 280, sm: 340 },
                height: { xs: 280, sm: 340 },
                mx: 'auto',
                borderRadius: '50%',
                border: '1px dashed rgba(80,80,80,0.35)',
                position: 'relative',
                bgcolor: '#F5F5F5',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 50,
                  borderRadius: '50%',
                  border: '1px dashed #65656D',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 95,
                  borderRadius: '50%',
                  border: '1px solid rgba(36,87,245,0.35)',
                  animation: 'zs-spin 28s linear infinite',
                },
              }}
            />
            <Stack
              spacing={1}
              sx={{
                position: { xs: 'relative', lg: 'absolute' },
                right: { lg: 0 },
                top: { lg: '50%' },
                transform: { lg: 'translateY(-50%)' },
                mt: { xs: 2, lg: 0 },
                zIndex: 2,
              }}
            >
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
                    minWidth: 180,
                  }}
                >
                  {tag.label}
                </Button>
              ))}
            </Stack>
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography sx={{ fontStyle: 'italic', color: '#0E251D', fontWeight: 600, mb: 0.75 }}>
                “{HOME_HERO_TAGS[activeTag]?.label === 'Digitize Operations'
                  ? "I'm stuck on spreadsheets & manual processes."
                  : HOME_HERO_TAGS[activeTag]?.label === 'Modernize Systems'
                    ? 'Our legacy stack slows every change.'
                    : HOME_HERO_TAGS[activeTag]?.label === 'Enable AI'
                      ? "The software works, but isn't AI-enabled yet."
                      : 'Every team has its own version of the truth.'}”
              </Typography>
              <Typography sx={{ color: '#505050', fontSize: '0.9rem' }}>
                {HOME_HERO_TAGS[activeTag]?.label === 'Digitize Operations'
                  ? 'Move to purpose-built systems with clear ownership.'
                  : HOME_HERO_TAGS[activeTag]?.label === 'Modernize Systems'
                    ? 'Rebuild in stages without stopping the business.'
                    : HOME_HERO_TAGS[activeTag]?.label === 'Enable AI'
                      ? 'Automation that keeps a person in the loop.'
                      : 'Integrations so tools share one record.'}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 5, md: 6 } }}>
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
            Our clients &amp; partners
          </Typography>
          <Box className="zs-marquee" sx={{ overflow: 'hidden', position: 'relative' }}>
            <Box className="zs-marquee__track" component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
              {[...CLIENTS, ...CLIENTS].map((c, i) => (
                <Box component="li" key={`${c.href}-${i}`} sx={{ px: 3, flexShrink: 0 }}>
                  <MuiLink
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
