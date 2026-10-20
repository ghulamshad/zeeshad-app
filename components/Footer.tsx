'use client';

import {
  Container,
  Box,
  Typography,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: '#business-solutions', label: 'Business Solutions' },
    { href: '#digital-marketing', label: 'Digital Marketing' },
    { href: '#consultancy', label: 'Consultancy' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Services' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
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
        bgcolor: 'secondary.dark',
        color: 'rgba(255,255,255,0.7)',
        pt: { xs: 7, md: 9 },
        pb: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1.2fr 1fr 1fr 1.2fr' },
            gap: { xs: 4, md: 5 },
          }}
        >
          <Box>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: 44,
                    height: 44,
                    flexShrink: 0,
                    filter: 'brightness(0) invert(1)',
                  }}
                >
                  <Image
                    src="/footer-logo-removebg-preview.png"
                    alt="ZeeShad"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="44px"
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-syne), Syne, sans-serif',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#fff',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    ZeeShad
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>
                    Private Limited
                  </Typography>
                </Box>
              </Box>
            </Link>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 280 }}>
              Business Solutions, Digital Marketing and Consultancy for growing companies. Based
              in Karachi, Pakistan.
            </Typography>
          </Box>

          <Box component="nav" aria-label="Footer services">
            <Typography sx={{ color: '#fff', fontWeight: 700, mb: 2, fontSize: '0.95rem' }}>
              Our services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {services.map((service) => (
                <Box component="li" key={service.label} sx={{ mb: 1 }}>
                  <MuiLink component={Link} href={service.href} sx={linkSx}>
                    {service.label}
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
              D-17 Ground Floor, Gulistan Society
              <br />
              Quaidabad, Karachi, Pakistan
            </Typography>
            <MuiLink href="mailto:info@zeeshad.com" sx={{ ...linkSx, display: 'block', mb: 1 }}>
              info@zeeshad.com
            </MuiLink>
            <MuiLink href="tel:+923040058323" sx={linkSx}>
              +92 304 0058323
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
            © {currentYear} ZeeShad (Private) Limited. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: '0.85rem' }}>
            Incorporated under Companies Act, 2017 (XIX of 2017)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
