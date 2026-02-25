'use client';

import { Box, Container, Typography, useTheme, alpha } from '@mui/material';

const technologies = [
  'Software Development',
  'Cloud & DevOps',
  'AI & Machine Learning',
  'Cybersecurity',
  'Web & Mobile',
  'Data Analytics',
  'Digital Transformation',
  'IT Consultancy',
];

export default function PartnersStrip() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 6 },
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            textAlign: 'center',
            letterSpacing: 4,
            color: 'text.secondary',
            fontWeight: 700,
            mb: 3,
          }}
        >
          Frameworks & expertise
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 700,
            color: 'text.primary',
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          Trusted technologies we build with
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {technologies.map((tech, index) => (
            <Box
              key={index}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: alpha(theme.palette.primary.main, 0.4),
                  color: 'primary.main',
                  bgcolor: alpha(theme.palette.primary.main, 0.06),
                },
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
