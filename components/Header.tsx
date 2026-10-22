'use client';

import { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
  alpha,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Close } from '@mui/icons-material';

const navItems = [
  { href: '#solutions', label: 'Solutions', id: 'solutions' },
  { href: '#marketing', label: 'Marketing', id: 'marketing' },
  { href: '#products', label: 'Products', id: 'products' },
  { href: '#about', label: 'Company', id: 'about' },
  { href: '#faq', label: 'Resources', id: 'faq' },
];

export default function Header() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = ['home', 'solutions', 'marketing', 'products', 'about', 'faq', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/')) return;
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 88;
      const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        ref={headerRef}
        position="sticky"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.appBar,
          bgcolor: scrolled ? alpha('#FFFFFF', 0.92) : '#FFFFFF',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${scrolled ? theme.palette.divider : 'transparent'}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 80 }, gap: 1.5 }}>
            <Box
              component={Link}
              href="/"
              onClick={() => handleNavClick('#home')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                textDecoration: 'none',
                color: 'inherit',
                mr: { lg: 1 },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 108, md: 132 },
                  height: { xs: 56, md: 68 },
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/header-logo.png"
                  alt="ZeeShad"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  priority
                  sizes="132px"
                />
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    lineHeight: 1.1,
                    color: 'text.primary',
                  }}
                >
                  ZeeShad
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'text.secondary',
                    fontWeight: 600,
                  }}
                >
                  Software and growth
                </Typography>
              </Box>
            </Box>

            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display: { xs: 'none', lg: 'flex' },
                gap: 0.25,
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              {navItems.map((item) => {
                const active = activeSection === item.id;
                return (
                  <Button
                    key={item.id}
                    component={Link}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    sx={{
                      color: active ? 'primary.main' : 'text.secondary',
                      fontWeight: active ? 700 : 500,
                      px: 1.5,
                      minWidth: 0,
                      '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', lg: 'flex' }, ml: 'auto' }}>
              <Button
                component={Link}
                href="#contact"
                variant="outlined"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                sx={{
                  borderColor: 'marketing.main',
                  color: 'marketing.main',
                  px: 2,
                  '&:hover': {
                    borderColor: 'marketing.dark',
                    bgcolor: 'marketing.light',
                  },
                }}
              >
                Free Marketing Audit
              </Button>
              <Button
                component={Link}
                href="#contact"
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                sx={{ px: 2.25 }}
              >
                Free Discovery Session
              </Button>
            </Stack>

            <IconButton
              aria-label="Open menu"
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { lg: 'none' }, ml: 'auto', color: 'text.primary' }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: 300, sm: 340 },
            bgcolor: 'background.paper',
            borderLeft: `1px solid ${theme.palette.divider}`,
          },
        }}
        sx={{ display: { lg: 'none' } }}
      >
        <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 700 }}>
            ZeeShad
          </Typography>
          <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <List component="nav" aria-label="Mobile navigation" sx={{ px: 1.5 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => handleNavClick(item.href)}
                sx={{
                  borderRadius: 2,
                  bgcolor:
                    activeSection === item.id
                      ? alpha(theme.palette.primary.main, 0.08)
                      : 'transparent',
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: activeSection === item.id ? 700 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
          <Button component={Link} href="#contact" variant="outlined" color="inherit" fullWidth
            onClick={() => handleNavClick('#contact')}
            sx={{ borderColor: 'marketing.main', color: 'marketing.main' }}
          >
            Free Marketing Audit
          </Button>
          <Button component={Link} href="#contact" variant="contained" fullWidth
            onClick={() => handleNavClick('#contact')}
          >
            Free Discovery Session
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
