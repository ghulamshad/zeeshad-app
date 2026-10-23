'use client';

import { Box, Container, Typography } from '@mui/material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { PROOF_DRAFT, PROOF_TESTIMONIALS } from '@/lib/content/site';

export default function Testimonials() {
  return (
    <Box
      component="section"
      id="stories"
      aria-labelledby="stories-heading"
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Typography
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '0.12em',
              fontSize: '0.72rem',
              mb: 1.5,
              textTransform: 'uppercase',
            }}
          >
            Featured stories_
          </Typography>
          <Typography
            id="stories-heading"
            variant="h2"
            component="h2"
            sx={{ mb: 1.5, maxWidth: 560 }}
          >
            Stories from partners
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 2, maxWidth: 520, lineHeight: 1.7 }}>
            Layout for approved client quotes and outcomes. Publish only with permission and verified
            results.
          </Typography>
          {PROOF_DRAFT && (
            <Typography
              role="note"
              sx={{
                mb: 4,
                px: 1.5,
                py: 1,
                borderRadius: 1,
                bgcolor: 'rgba(194,65,12,0.08)',
                color: 'marketing.dark',
                fontSize: '0.8rem',
                fontWeight: 600,
                maxWidth: 640,
              }}
            >
              Draft placeholders — edit PROOF_TESTIMONIALS in lib/content/site.ts, then set
              PROOF_DRAFT to false.
            </Typography>
          )}
        </Reveal>

        <Stagger>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 2.5,
            }}
          >
            {PROOF_TESTIMONIALS.map((item, i) => (
              <StaggerItem key={`${item.name}-${i}`}>
                <Box
                  sx={{
                    height: '100%',
                    p: 3,
                    borderRadius: 2.5,
                    border: '1px dashed',
                    borderColor: 'divider',
                    bgcolor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    sx={{
                      fontStyle: 'italic',
                      color: 'text.secondary',
                      lineHeight: 1.65,
                      mb: 3,
                      flexGrow: 1,
                      fontSize: '0.975rem',
                    }}
                  >
                    “{item.quote}”
                  </Typography>
                  <Typography sx={{ fontWeight: 700, mb: 0.25 }}>{item.name}</Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 2 }}>
                    {item.role}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      color: 'primary.main',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.result}
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
