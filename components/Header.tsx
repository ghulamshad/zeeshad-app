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
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Close, ArrowForward } from '@mui/icons-material';
import { motion, useReducedMotion } from 'framer-motion';

const navItems = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#features', label: 'Services', id: 'features' },
  { href: '#products', label: 'Products', id: 'products' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#faq', label: 'FAQ', id: 'faq' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Header() {
  const theme = useTheme();
  const reduce = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = ['home', 'features', 'products', 'about', 'faq', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
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
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        ref={headerRef}
        position="fixed"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.appBar,
          bgcolor: scrolled
            ? alpha(theme.palette.background.paper, 0.92)
            : alpha(theme.palette.background.paper, 0.72),
          backdropFilter: 'blur(16px) saturate(140%)',
          borderBottom: `1px solid ${scrolled ? theme.palette.divider : 'transparent'}`,
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 76, md: 88 },
              gap: 2,
            }}
          >
            <Box
              component={Link}
              href="/"
              onClick={() => handleNavClick('#home')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
                mr: { lg: 2 },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 112, sm: 132, md: 152 },
                  height: { xs: 58, sm: 68, md: 78 },
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/header-logo.png"
                  alt="ZeeShad"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                  priority
                  sizes="(max-width: 600px) 112px, (max-width: 900px) 132px, 152px"
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-syne), Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', md: '1.45rem' },
                    lineHeight: 1.1,
                    color: 'text.primary',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ZeeShad
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    color: 'text.secondary',
                    fontSize: '0.72rem',
                    letterSpacing: '0.04em',
                    fontWeight: 500,
                  }}
                >
                  Private Limited
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
                      px: 1.75,
                      py: 1,
                      minWidth: 0,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 12,
                        right: 12,
                        bottom: 6,
                        height: 2,
                        bgcolor: 'primary.main',
                        transform: active ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.25s ease',
                      },
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ display: { xs: 'none', lg: 'flex' }, ml: 'auto' }}>
              <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
                <Button
                  component={Link}
                  href="#contact"
                  variant="contained"
                  endIcon={<ArrowForward sx={{ fontSize: 18 }} />}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  sx={{ px: 2.5, py: 1.15 }}
                >
                  Request estimate
                </Button>
              </motion.div>
            </Box>

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
          <Typography
            sx={{
              fontFamily: 'var(--font-syne), Syne, sans-serif',
              fontWeight: 700,
              fontSize: '1.25rem',
            }}
          >
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
                  color: activeSection === item.id ? 'primary.main' : 'text.primary',
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
        <Box sx={{ p: 2.5, mt: 'auto' }}>
          <Button
            component={Link}
            href="#contact"
            variant="contained"
            fullWidth
            endIcon={<ArrowForward />}
            onClick={() => handleNavClick('#contact')}
          >
            Request estimate
          </Button>
        </Box>
      </Drawer>

      <Toolbar sx={{ minHeight: { xs: 76, md: 88 } }} />
    </>
  );
}
