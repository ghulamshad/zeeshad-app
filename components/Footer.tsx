'use client';

import {
  Container,
  Box,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Email, Phone, LocationOn } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: '#features', label: 'Custom ERP' },
    { href: '#features', label: 'SaaS MVP' },
    { href: '#features', label: 'E-commerce' },
    { href: '#features', label: 'Business Automation' },
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
                    sx={{ fontWeight: 700, fontSize: { xs: '1rem', sm: '1.1rem' }, color: 'text.primary' }}
                  >
                    ZeeShad
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ fontSize: '0.7rem', color: 'text.secondary', letterSpacing: '0.5px' }}
                  >
                    Custom ERP · SaaS · E-commerce
                  </Typography>
                </Box>
              </Box>
            </Link>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
              Software delivery for custom ERP, SaaS MVPs, e-commerce and automation.
              Based in Karachi, Pakistan.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }} component="nav" aria-label="Footer services">
            <Typography variant="h6" component="p" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
              Our services
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {services.map((service) => (
                <Box component="li" key={service.label} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    href={service.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {service.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }} component="nav" aria-label="Footer quick links">
            <Typography variant="h6" component="p" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
              Quick links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {quickLinks.map((link) => (
                <Box component="li" key={link.href + link.label} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    href={link.href}
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {link.label}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Typography variant="h6" component="p" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <LocationOn sx={{ color: 'primary.main', mt: 0.5, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  D-17 Ground Floor, Gulistan Society
                  <br />
                  Quaidabad, Karachi, Pakistan
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Email sx={{ color: 'primary.main', flexShrink: 0 }} />
                <MuiLink
                  href="mailto:info@zeeshad.com"
                  sx={{ color: 'text.secondary', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: 'primary.main' } }}
                >
                  info@zeeshad.com
                </MuiLink>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Phone sx={{ color: 'primary.main', flexShrink: 0 }} />
                <MuiLink
                  href="tel:+923040058323"
                  sx={{ color: 'text.secondary', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: 'primary.main' } }}
                >
                  +92 304 0058323
                </MuiLink>
              </Box>
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
