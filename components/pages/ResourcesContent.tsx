'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import MarketingClosing from '@/components/pages/MarketingClosing';
import { RESOURCES_PAGE, SCOPING_CTA } from '@/lib/content/marketing';

const cardSx = {
  p: 3,
  borderRadius: 3,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
} as const;

const FILTERS = ['All', 'Case study', 'Guide', 'News'] as const;
type Filter = (typeof FILTERS)[number];

export default function ResourcesContent() {
  const [filter, setFilter] = useState<Filter>('All');

  const items = useMemo(() => {
    if (filter === 'All') return RESOURCES_PAGE.items;
    return RESOURCES_PAGE.items.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Resources
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 2,
                maxWidth: 720,
              }}
            >
              {RESOURCES_PAGE.hero}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 640, lineHeight: 1.75 }}>
              {RESOURCES_PAGE.body}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
            {FILTERS.map((option) => (
              <Button
                key={option}
                variant={filter === option ? 'contained' : 'outlined'}
                size="small"
                onClick={() => setFilter(option)}
              >
                {option === 'Case study' ? 'Case studies' : option === 'Guide' ? 'Guides' : option}
              </Button>
            ))}
          </Stack>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
              mb: 5,
            }}
          >
            {items.map((item) => (
              <Box key={item.title} sx={cardSx}>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', mb: 1, display: 'block', letterSpacing: '0.06em' }}
                >
                  {item.type}
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{item.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item.summary}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ ...cardSx, mb: 5 }}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{RESOURCES_PAGE.note}</Typography>
          </Box>

          <Button component={Link} href={SCOPING_CTA.href} variant="contained" endIcon={<ArrowForward />}>
            {SCOPING_CTA.label}
          </Button>
        </Container>

        <MarketingClosing />
      </Box>
    </SiteChrome>
  );
}
