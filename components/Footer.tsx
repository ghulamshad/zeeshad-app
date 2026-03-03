'use client';

import {
  Container,
  Box,
  Typography,
  Grid,
  Link as MuiLink,
  IconButton,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Twitter,
  GitHub,
} from '@mui/icons-material';

export default function Footer() {
  // Use static year to avoid hydration mismatch
  const currentYear = 2024;

  const services = [
    'Custom ERP',
    'SaaS MVP',
    'E-commerce',
    'Business Automation',
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.default',
        color: 'text.secondary',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 48, sm: 56 },
                    height: { xs: 48, sm: 56 },
                    flexShrink: 0,
                    filter: 'brightness(0) invert(1)',
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                      opacity: 0.9,
                    },
                  }}
                >
                  <Image
                    src="/footer-logo-removebg-preview.png"
                    alt="ZeeShad Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 640px) 48px, 56px"
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.2,
                      mb: 0.25,
                      color: 'text.primary',
                    }}
                  >
                    ZeeShad
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: { xs: '0.65rem', sm: '0.7rem' },
                      color: 'text.secondary',
                      fontWeight: 500,
                      letterSpacing: '0.5px',
                      display: 'block',
                    }}
                  >
                    Innovative IT Solutions
                  </Typography>
                </Box>
              </Box>
            </Link>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              Custom ERP, SaaS MVP builds, e-commerce systems, and business automation. 
              From idea to launch.
            </Typography>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} component="nav" aria-label="Footer services">
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
              Our Services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {services.map((service, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    href="#features"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s',
                    }}
                  >
                    {service}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} component="nav" aria-label="Footer quick links">
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.map((link) => (
                <Box component="li" key={link.href} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    href={link.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <LocationOn sx={{ color: 'primary.main', mt: 0.5, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  D-17 Ground Floor, Gulistan Society<br />
                  Quaidabad, Karachi, Pakistan
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Email sx={{ color: 'primary.main', flexShrink: 0 }} />
                <MuiLink
                  href="mailto:info@zeeshad.com"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  info@zeeshad.com
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Phone sx={{ color: 'primary.main', flexShrink: 0 }} />
                <MuiLink
                  href="tel:+923040058323"
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  +92 304 0058323
                </MuiLink>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(37, 99, 235, 0.1)',
                  },
                }}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(37, 99, 235, 0.1)',
                  },
                }}
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'rgba(37, 99, 235, 0.1)',
                  },
                }}
                aria-label="GitHub"
              >
                <GitHub />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {currentYear} ZeeShad (Private) Limited. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Incorporated under Companies Act, 2017 (XIX of 2017)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
