'use client';

import { Container, Box, Typography, useTheme, alpha } from '@mui/material';

export default function About() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
            About <Box component="span" sx={{ color: 'primary.main' }}>ZeeShad</Box>
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: 'text.secondary', lineHeight: 1.7 }}
          >
            A focused software delivery studio—not a general IT supermarket.
          </Typography>
        </Box>

        <Box
          sx={{
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
            bgcolor: 'background.paper',
            '& > p': { mb: 2, lineHeight: 1.8, color: 'text.secondary' },
          }}
        >
          <Typography>
            ZeeShad (Private) Limited is a Karachi-based software company. We design and
            build custom ERP, SaaS MVPs, e-commerce systems and business automation for
            operators who need systems that match how their business actually runs.
          </Typography>
          <Typography>
            We keep the offer narrow on purpose: four delivery areas we can own end to end.
            We do not claim labs, training campuses or every IT category under the sun.
            When you talk to us, you talk to the people who will scope and build the work.
          </Typography>
          <Typography>
            Prefer clear scopes, written estimates and remote collaboration across time
            zones. Business hours: Monday–Friday, 09:00–18:00 Pakistan Standard Time
            (PKT, UTC+5). We aim to overlap UK afternoons and US Eastern mornings when
            your project needs it.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
