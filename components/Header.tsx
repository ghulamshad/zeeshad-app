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
import { usePathname } from 'next/navigation';
import { Menu, Close } from '@mui/icons-material';
import BrandMark from '@/components/BrandMark';
import { NAV_PRIMARY } from '@/lib/content/site';

export default function Header() {
  const theme = useTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
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
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, gap: 1.5 }}>
            <Box
              component={Link}
              href="/"
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
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'text.secondary',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Enterprise software · AI · transformation
                </Typography>
              </Box>
            </Box>

            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.25,
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              {NAV_PRIMARY.filter((item) => item.href !== '/contact').map((item) => {
                const active = isActive(item.href);
                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    sx={{
                      color: active ? 'primary.main' : 'text.secondary',
                      fontWeight: active ? 700 : 500,
                      px: 1.35,
                      minWidth: 0,
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: alpha(theme.palette.primary.main, 0.06),
                      },
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
              sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto', flexShrink: 0 }}
            >
              <Button
                component={Link}
                href="/contact"
                size="small"
                variant="contained"
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
                Discuss Your Project
              </Button>
            </Stack>

            <IconButton
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' }, ml: 'auto', color: 'text.primary' }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        id="mobile-nav-drawer"
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
        sx={{ display: { md: 'none' } }}
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
          {NAV_PRIMARY.map((item) => {
            const active = isActive(item.href);
            return (
              <ListItem key={item.href} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  selected={active}
                  aria-current={active ? 'page' : undefined}
                  sx={{
                    borderRadius: 2,
                    bgcolor: active ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ fontWeight: active ? 700 : 500 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ p: 2.5 }}>
          <Button
            component={Link}
            href="/contact"
            size="small"
            variant="contained"
            fullWidth
            onClick={() => setMobileOpen(false)}
            sx={{ fontSize: '0.875rem', py: 0.85, minHeight: 36 }}
          >
            Discuss Your Project
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
