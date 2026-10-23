'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { CLIENTS } from '@/lib/content/site';

export default function Clients() {
  return (
    <Box
      component="section"
      id="clients"
      aria-labelledby="clients-heading"
      sx={{
        py: { xs: 3.5, md: 4 },
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
            gap: { xs: 2, md: 4 },
          }}
        >
          <Typography
            id="clients-heading"
            sx={{
              fontWeight: 800,
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              flexShrink: 0,
            }}
          >
            Our clients_
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: { xs: 2, sm: 3.5 },
              flexGrow: 1,
            }}
          >
            {CLIENTS.map((client) => (
              <MuiLink
                key={client.href}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${client.name} (opens in a new tab)`}
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  color: 'text.primary',
                  textDecoration: 'none',
                  opacity: 0.78,
                  letterSpacing: '-0.01em',
                  '&:hover': { opacity: 1, color: 'primary.main' },
                }}
              >
                {client.name}
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
