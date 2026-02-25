'use client';

import { Box, Container, Typography, Button, useTheme, alpha } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';

export default function CTASection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
        borderTop: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            Ready to build together?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            Get in touch today and get your first iteration within 48 hours.
          </Typography>
          <Button
            component={Link}
            href="#contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              px: 4,
              py: 1.75,
              fontSize: '1.1rem',
              borderRadius: 2,
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
