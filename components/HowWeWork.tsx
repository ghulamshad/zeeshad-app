'use client';

import { Box, Container, Typography } from '@mui/material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { HOW_WE_WORK } from '@/lib/content/site';

export default function HowWeWork() {
  return (
    <Box
      component="section"
      id="how-we-work"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
            How we work
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 520, fontSize: { xs: '1.6rem', md: '1.85rem' } }}>
            Delivery commitments you can check—not invented metrics
          </Typography>
        </Reveal>
        <Stagger>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
              gap: 2.5,
              mt: 3,
            }}
          >
            {HOW_WE_WORK.map((item) => (
              <StaggerItem key={item.title}>
                <Box
                  sx={{
                    height: '100%',
                    p: 2.75,
                    borderRadius: 2.5,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography sx={{ fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>{item.title}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.925rem', lineHeight: 1.65 }}>
                    {item.line}
                  </Typography>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>
      </Container>
    </Box>
  );
}
