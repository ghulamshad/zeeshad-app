'use client';

import {
  Container,
  Box,
  Typography,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import BrandMark from '@/components/BrandMark';
import { COMPANY, NAV_PRIMARY, SITE_VERSION } from '@/lib/content/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const explore = NAV_PRIMARY.filter((item) => item.href !== '/');
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/case-studies', label: 'Delivery approach' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  const linkSx = {
    color: 'rgba(255,255,255,0.65)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    '&:hover': { color: '#fff' },
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'rgba(255,255,255,0.7)',
        pt: { xs: 7, md: 9 },
        pb: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1.3fr 1fr 1fr 1.2fr' },
            gap: { xs: 4, md: 5 },
          }}
        >
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <BrandMark size={44} invert />
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    color: '#fff',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ZeeShad
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Enterprise software · AI · transformation
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              Technology that moves your business forward. {COMPANY.legalName}.
            </Typography>
          </Box>

          <Box component="nav" aria-label="Footer explore">
            <Typography sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>
              Explore
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {explore.map((item) => (
                <Box component="li" key={item.href} sx={{ mb: 1 }}>
                  <MuiLink component={Link} href={item.href} sx={linkSx}>
                    {item.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Box>

          <Box component="nav" aria-label="Footer quick links">
            <Typography sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>
              Quick links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.map((link) => (
                <Box component="li" key={link.href + link.label} sx={{ mb: 1 }}>
                  <MuiLink component={Link} href={link.href} sx={linkSx}>
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>
              Contact
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.65, mb: 1.5 }}>
              {COMPANY.addressLines.map((line) => (
                <Box component="span" key={line} sx={{ display: 'block' }}>
                  {line}
                </Box>
              ))}
            </Typography>
            <MuiLink href={`mailto:${COMPANY.email}`} sx={{ ...linkSx, display: 'block', mb: 1 }}>
              {COMPANY.email}
            </MuiLink>
            <MuiLink href={`tel:${COMPANY.phoneTel}`} sx={linkSx}>
              {COMPANY.phoneDisplay}
            </MuiLink>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: 1.5,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography sx={{ fontSize: '0.85rem' }}>
            © {currentYear} {COMPANY.legalName}. All rights reserved. · v{SITE_VERSION}
          </Typography>
          <Typography sx={{ fontSize: '0.85rem' }}>{COMPANY.incorporationNote}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
