'use client';

import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { INSPIRED_ANNOUNCE } from '@/lib/content/inspiredHome';

export default function AnnouncementBar() {
  const items = [...INSPIRED_ANNOUNCE, ...INSPIRED_ANNOUNCE];
  return (
    <Box
      sx={{
        bgcolor: '#2457F5',
        color: '#fff',
        py: 1.1,
        position: 'relative',
        zIndex: (t) => t.zIndex.appBar + 1,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box className="zs-marquee" sx={{ overflow: 'hidden', width: '100%' }}>
          <Box className="zs-marquee__track" sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {items.map((item, i) => (
              <Typography
                key={`${item.line}-${i}`}
                sx={{
                  fontSize: { xs: '0.72rem', sm: '0.8rem' },
                  whiteSpace: 'nowrap',
                  fontWeight: 500,
                  flexShrink: 0,
                }}
              >
                {item.line}{' '}
                <MuiLink
                  component={Link}
                  href={item.href}
                  sx={{ color: '#fff', fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: 3 }}
                >
                  Read More!
                </MuiLink>
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
