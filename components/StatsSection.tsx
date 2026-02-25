'use client';

import { Box, Container, Typography, useTheme, alpha } from '@mui/material';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Happy Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Skilled Engineers' },
];

export default function StatsSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'background.paper',
        borderTop: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
        borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            textAlign: 'center',
            letterSpacing: 4,
            color: 'primary.main',
            fontWeight: 700,
            mb: 1,
          }}
        >
          Success numbers
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          Trusted by thousands, proven by results.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 4 },
            textAlign: 'center',
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                },
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  mb: 0.5,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
