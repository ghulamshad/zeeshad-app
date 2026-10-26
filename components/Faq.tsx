'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';
import { WHY_PAGE } from '@/lib/content/marketing';

const FAQ_ITEMS = WHY_PAGE.faq;

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>(FAQ_ITEMS[0].q);

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 9, md: 11 },
        bgcolor: 'background.default',
        borderTop: '1px solid',
        borderColor: 'divider',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="md">
        <Reveal>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', mb: 1.5, display: 'block', textAlign: 'center' }}
          >
            Resources · FAQ
          </Typography>
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 5 }}>
            Straight answers
          </Typography>
        </Reveal>

        {FAQ_ITEMS.map((item) => (
          <Accordion
            key={item.q}
            disableGutters
            elevation={0}
            expanded={expanded === item.q}
            onChange={(_, isExpanded) => setExpanded(isExpanded ? item.q : false)}
            sx={{
              mb: 1.25,
              bgcolor: 'transparent',
              borderBottom: '1px solid',
              borderColor: 'divider',
              borderRadius: '0 !important',
              '&:before': { display: 'none' },
              '&.Mui-expanded': { margin: 0, mb: 1.25 },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}
              sx={{ px: 0, py: 0.5 }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'text.primary',
                  pr: 2,
                }}
              >
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 2.5 }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
