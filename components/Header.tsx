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
import Link from 'next/link';
import { Menu, Close } from '@mui/icons-material';
import BrandMark from '@/components/BrandMark';

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
          bgcolor: scrolled ? alpha('#FFFFFF', 0.94) : '#FFFFFF',
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, gap: 2 }}>
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
                minWidth: 0,
              }}
            >
              <BrandMark size={48} />
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '1.15rem', md: '1.25rem' },
                    lineHeight: 1.1,
                    color: 'text.primary',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ZeeShad
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'text.secondary',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Software and growth partner
                </Typography>
              </Box>
            </Box>

            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display: { xs: 'none', lg: 'flex' },
                gap: 0.5,
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
                      minWidth: 0,
                      fontSize: '0.925rem',
                      '&:hover': { color: 'primary.main', bgcolor: alpha(theme.palette.primary.main, 0.06) },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            <Stack
              direction="row"
              spacing={0.75}
              alignItems="center"
              sx={{ display: { xs: 'none', lg: 'flex' }, ml: 'auto', flexShrink: 0 }}
            >
              <Button
                component={Link}
                href="#contact"
                size="small"
                variant="text"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                sx={{
                  color: 'marketing.main',
                  fontWeight: 650,
                  fontSize: '0.8125rem',
                  px: 1.25,
                  py: 0.5,
                  minHeight: 32,
                  borderRadius: 999,
                  whiteSpace: 'nowrap',
                }}
              >
                Marketing Audit
              </Button>
              <Button
                component={Link}
                href="#contact"
                size="small"
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                sx={{
                  fontSize: '0.8125rem',
                  fontWeight: 650,
                  px: 1.75,
                  py: 0.65,
                  minHeight: 32,
                  borderRadius: 999,
                  whiteSpace: 'nowrap',
                }}
              >
                Discovery Session
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
          <Typography sx={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800 }}>
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
        <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button
            component={Link}
            href="#contact"
            size="small"
            variant="outlined"
            fullWidth
            onClick={() => handleNavClick('#contact')}
            sx={{
              borderColor: 'marketing.main',
              color: 'marketing.main',
              fontSize: '0.875rem',
              py: 0.85,
              minHeight: 36,
            }}
          >
            Marketing Audit
          </Button>
          <Button
            component={Link}
            href="#contact"
            size="small"
            variant="contained"
            fullWidth
            onClick={() => handleNavClick('#contact')}
            sx={{ fontSize: '0.875rem', py: 0.85, minHeight: 36 }}
          >
            Discovery Session
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
