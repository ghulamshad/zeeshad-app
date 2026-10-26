'use client';

import {
  Container,
  Box,
  Typography,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY, NAV_PRIMARY, SITE_VERSION } from '@/lib/content/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const explore = NAV_PRIMARY.filter((item) => item.href !== '/');
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/approach', label: 'Approach' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy policy' },
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
            <Box
              component={Link}
              href="/"
              aria-label="ZeeShad home"
              sx={{
                display: 'inline-flex',
                mb: 2.5,
                lineHeight: 0,
                textDecoration: 'none',
              }}
            >
              <Box sx={{ position: 'relative', width: { xs: 148, md: 168 }, height: { xs: 50, md: 56 } }}>
                <Image
                  src="/footer-logo.png"
                  alt="ZeeShad"
                  fill
                  sizes="168px"
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
              </Box>
            </Box>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              {COMPANY.positioning}
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
