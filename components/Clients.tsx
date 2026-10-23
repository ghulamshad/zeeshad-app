'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { CLIENTS } from '@/lib/content/site';

export default function Clients() {
  return (
    <Box
      component="section"
      id="clients"
      aria-labelledby="clients-heading"
      sx={{
        py: { xs: 5, md: 6 },
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            id="clients-heading"
            variant="overline"
            sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}
          >
            Selected clients
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{ mb: 3, fontSize: { xs: '1.35rem', md: '1.5rem' }, maxWidth: 480 }}
          >
            Organizations we have worked with
          </Typography>
        </Reveal>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: 2,
            maxWidth: 960,
          }}
        >
          {CLIENTS.map((client) => (
            <Box
              key={client.href}
              sx={{
                p: 2.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
              }}
            >
              <MuiLink
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${client.name} (opens in a new tab)`}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'text.primary',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {client.name}
                <OpenInNew sx={{ fontSize: 16, opacity: 0.7 }} aria-hidden />
              </MuiLink>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', mt: 0.75 }}>
                {client.note}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
