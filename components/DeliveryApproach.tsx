'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { CASE_STUDIES_INTRO, DELIVERY_STEPS } from '@/lib/content/site';

export default function DeliveryApproach() {
  return (
    <Box
      component="section"
      id="delivery"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
            Delivery approach
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 640 }}>
            {CASE_STUDIES_INTRO.headline}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 4, maxWidth: 560, fontSize: '1.05rem', lineHeight: 1.7 }}>
            {CASE_STUDIES_INTRO.body}
          </Typography>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: 2,
            mb: 4,
          }}
        >
          {DELIVERY_STEPS.map((step, i) => (
            <Box
              key={step.title}
              sx={{
                p: 2.5,
                borderRadius: 2.5,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography sx={{ color: 'primary.main', fontWeight: 800, mb: 1, fontSize: '0.8rem' }}>
                0{i + 1}
              </Typography>
              <Typography sx={{ fontWeight: 700, mb: 0.75 }}>{step.title}</Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.6 }}>
                {step.line}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button component={Link} href="/case-studies" variant="outlined" endIcon={<ArrowForward />}>
          Read the delivery approach
        </Button>
      </Container>
    </Box>
  );
}
