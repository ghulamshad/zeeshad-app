'use client';

import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import Image from 'next/image';
import { Reveal } from '@/components/Motion';
import { ASSETS, INSPIRED_FAQ } from '@/lib/content/inspiredHome';
import { WS, wsH2Sx, wsToptitleSx } from '@/lib/wsDesign';

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const mid = Math.ceil(INSPIRED_FAQ.items.length / 2);
  const left = INSPIRED_FAQ.items.slice(0, mid);
  const right = INSPIRED_FAQ.items.slice(mid);

  const renderItem = (item: (typeof INSPIRED_FAQ.items)[number]) => {
    const open = expanded === item.q;
    return (
      <Box key={item.q} sx={{ borderBottom: '1px solid #E3E7EF', py: 2.25 }}>
        <Box
          component="button"
          type="button"
          aria-expanded={open}
          onClick={() => setExpanded(open ? false : item.q)}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 2,
            bgcolor: 'transparent',
            border: 0,
            p: 0,
            cursor: 'pointer',
            textAlign: 'left',
            font: 'inherit',
          }}
        >
          <Typography
            sx={{
              fontFamily: WS.fontDisplay,
              fontWeight: 700,
              fontSize: { xs: '1rem', md: '18px' },
              color: WS.ink,
              pr: 1,
              lineHeight: 1.4,
            }}
          >
            {item.q}
          </Typography>
          <ExpandMore
            sx={{
              color: WS.cyan,
              flexShrink: 0,
              transition: 'transform 0.2s',
              transform: open ? 'rotate(180deg)' : 'none',
            }}
          />
        </Box>
        <Box sx={{ maxHeight: open ? 260 : 0, overflow: 'hidden', transition: 'max-height 0.28s ease' }}>
          <Typography sx={{ fontFamily: WS.fontBody, color: WS.slate, lineHeight: 1.75, pt: 1.5, pb: 0.5, pr: 4, fontSize: '16px' }}>
            {item.a}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 9, md: 12 },
        bgcolor: WS.white,
        scrollMarginTop: 96,
        position: 'relative',
        overflow: 'hidden',
        fontFamily: WS.fontBody,
      }}
    >
      <Box aria-hidden sx={{ position: 'absolute', right: -140, top: 0, width: 560, height: 420, opacity: 0.4, pointerEvents: 'none' }}>
        <Image src={ASSETS.faqBg} alt="" fill unoptimized style={{ objectFit: 'contain' }} />
      </Box>

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, maxWidth: 1164, px: { xs: 2, md: 1.5 } }}>
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography component="span" sx={wsToptitleSx}>
              {INSPIRED_FAQ.eyebrow}
            </Typography>
            <Typography component="h2" sx={wsH2Sx}>
              {INSPIRED_FAQ.title}
            </Typography>
          </Box>
        </Reveal>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 0, md: 5 } }}>
          <Box>{left.map(renderItem)}</Box>
          <Box>{right.map(renderItem)}</Box>
        </Box>
      </Container>
    </Box>
  );
}
