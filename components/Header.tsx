'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
  Collapse,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Close, Add, NorthEast } from '@mui/icons-material';
import {
  HEADER_COMPANY_LINKS,
  HEADER_CTAS,
  HEADER_NAV,
} from '@/lib/content/site';
import { SERVICE_TIERS } from '@/lib/content/marketing';

type MegaId = 'services' | 'company';

function PlusIcon({ open }: { open: boolean }) {
  return (
    <Box
      component="span"
      aria-hidden
      sx={{
        display: 'inline-flex',
        width: 9,
        height: 9,
        position: 'relative',
        color: 'inherit',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          width: 9,
          height: 1.5,
          bgcolor: 'currentColor',
          transform: 'translateY(-50%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: 0,
          width: 1.5,
          height: 9,
          bgcolor: 'currentColor',
          transform: open ? 'translateX(-50%) scaleY(0)' : 'translateX(-50%)',
          transition: 'transform 0.15s ease',
        }}
      />
    </Box>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<MegaId | null>(null);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMega(null), 160);
  };

  const openPanel = (id: MegaId) => {
    clearCloseTimer();
    setOpenMega(id);
  };

  useEffect(() => {
    setOpenMega(null);
    setMobileOpen(false);
  }, [pathname]);

  // Clear sticky MUI/devtools scroll locks so the homepage never freezes.
  useEffect(() => {
    const unlock = () => {
      if (document.body.style.overflow === 'hidden' && !mobileOpen) {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      }
    };
    unlock();
    const t = window.setTimeout(unlock, 300);
    return () => window.clearTimeout(t);
  }, [pathname, mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMega(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href.startsWith('/#')) return pathname === '/';
      if (href === '/') return pathname === '/';
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [pathname]
  );

  const discoveryCta = (
    <Button
      component={Link}
      href={HEADER_CTAS.primary.href}
      variant="contained"
      size="small"
      endIcon={<NorthEast sx={{ fontSize: 14 }} />}
      onClick={() => {
        setOpenMega(null);
        setMobileOpen(false);
      }}
      sx={{
        fontSize: '0.8125rem',
        fontWeight: 700,
        px: 2.25,
        py: 1,
        minHeight: 40,
        borderRadius: 999,
        textTransform: 'none',
        whiteSpace: 'nowrap',
        boxShadow: 'none',
        bgcolor: '#2457F5',
        '&:hover': { bgcolor: '#FF5900', boxShadow: 'none' },
      }}
    >
      {HEADER_CTAS.primary.label}
    </Button>
  );

  return (
    <>
      <AppBar
        ref={headerRef}
        position="sticky"
        elevation={0}
        onMouseLeave={scheduleClose}
        sx={{
          zIndex: (t) => t.zIndex.appBar,
          bgcolor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          color: '#4B5565',
          borderBottom: openMega ? 'none' : '1px solid rgba(227,231,239,0.9)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, lg: 90 },
              py: { xs: 1.5, lg: 0 },
              gap: 2,
              justifyContent: 'space-between',
            }}
          >
            <Box
              component={Link}
              href="/"
              aria-label="ZeeShad home"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                flexShrink: 0,
                lineHeight: 0,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 132, sm: 152, lg: 168 },
                  height: { xs: 44, sm: 50, lg: 56 },
                }}
              >
                <Image
                  src="/header-logo.png"
                  alt="ZeeShad"
                  fill
                  priority
                  sizes="168px"
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
              </Box>
            </Box>

            <Box
              component="nav"
              aria-label="Primary"
              sx={{ display: { xs: 'none', lg: 'block' }, flexGrow: 1 }}
            >
              <Box
                component="ul"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { lg: 3.5, xl: 4.25 },
                  listStyle: 'none',
                  m: 0,
                  p: 0,
                }}
              >
                {HEADER_NAV.map((item) => {
                  const active = isActive(item.href);
                  const hasMega = Boolean(item.mega);
                  const megaOpen = item.mega ? openMega === item.mega : false;
                  return (
                    <Box component="li" key={item.id} sx={{ listStyle: 'none' }}>
                      <Box
                        component={Link}
                        href={item.href}
                        aria-haspopup={hasMega ? 'true' : undefined}
                        aria-expanded={hasMega ? megaOpen : undefined}
                        onMouseEnter={() => {
                          if (item.mega) openPanel(item.mega as MegaId);
                          else {
                            clearCloseTimer();
                            setOpenMega(null);
                          }
                        }}
                        onFocus={() => {
                          if (item.mega) openPanel(item.mega as MegaId);
                        }}
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.75,
                          textDecoration: 'none',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          letterSpacing: '0.02em',
                          color: active || megaOpen ? 'primary.main' : '#505050',
                          py: 1,
                          transition: 'color 0.15s',
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        <span>{item.label}</span>
                        {hasMega && <PlusIcon open={megaOpen} />}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ display: { xs: 'none', lg: 'flex' }, flexShrink: 0 }}
            >
              <Button
                component={Link}
                href={HEADER_CTAS.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="outlined"
                endIcon={<NorthEast sx={{ fontSize: 14 }} />}
                sx={{
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  px: 2,
                  py: 1,
                  minHeight: 40,
                  borderRadius: 999,
                  textTransform: 'none',
                  borderColor: '#CBD2DE',
                  color: '#0B1324',
                  bgcolor: 'transparent',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: 'rgba(36,87,245,0.04)',
                  },
                }}
              >
                {HEADER_CTAS.secondary.label}
              </Button>
              {discoveryCta}
            </Stack>

            <IconButton
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { lg: 'none' }, color: '#0E251D', ml: 'auto' }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Services mega */}
        <Box
          onMouseEnter={() => openPanel('services')}
          onMouseLeave={scheduleClose}
          sx={{
            display: { xs: 'none', lg: openMega === 'services' ? 'block' : 'none' },
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            bgcolor: '#F5F5F5',
            borderBottom: '1px solid #E8E8E8',
            boxShadow: '0 18px 40px rgba(11,19,36,0.08)',
          }}
          aria-hidden={openMega !== 'services'}
        >
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { lg: '1fr 1fr 1fr 0.85fr' },
                gap: 2,
              }}
            >
              {SERVICE_TIERS.map((tier, i) => (
                <Box
                  key={tier.slug}
                  component={Link}
                  href={tier.href}
                  onClick={() => setOpenMega(null)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2.5,
                    borderRadius: 2,
                    bgcolor: '#fff',
                    border: '1px solid #E8E8E8',
                    textDecoration: 'none',
                    color: 'inherit',
                    minHeight: 220,
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                    '&:hover': {
                      borderColor: 'primary.light',
                      boxShadow: '0 8px 24px rgba(36,87,245,0.08)',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: 'primary.main',
                      fontWeight: 800,
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      mb: 1,
                    }}
                  >
                    SERVICE {String(i + 1).padStart(2, '0')}_
                  </Typography>
                  <Typography sx={{ fontWeight: 800, color: '#0E251D', mb: 1, fontSize: '1.05rem' }}>
                    {tier.title}
                  </Typography>
                  <Typography sx={{ color: '#505050', fontSize: '0.875rem', lineHeight: 1.6, flexGrow: 1 }}>
                    {tier.homeBlurb}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', mt: 2, lineHeight: 1.5 }}>
                    {tier.fee}
                  </Typography>
                </Box>
              ))}
              <Box
                component={Link}
                href="/contact"
                onClick={() => setOpenMega(null)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: 'secondary.main',
                  color: '#fff',
                  textDecoration: 'none',
                  minHeight: 220,
                  position: 'relative',
                }}
              >
                <NorthEast
                  sx={{ position: 'absolute', top: 16, right: 16, fontSize: 16, opacity: 0.7 }}
                />
                <Box>
                  <Typography
                    sx={{
                      color: '#A8C0FF',
                      fontWeight: 800,
                      fontSize: '0.68rem',
                      letterSpacing: '0.12em',
                      mb: 1.5,
                    }}
                  >
                    SCOPING CALL_
                  </Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.25rem', mb: 1, lineHeight: 1.25 }}>
                    Ready to hand it off?
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                    Book a 30-minute scoping call.
                    <br />
                    One-page scope within three business days.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Company mega */}
        <Box
          onMouseEnter={() => openPanel('company')}
          onMouseLeave={scheduleClose}
          sx={{
            display: { xs: 'none', lg: openMega === 'company' ? 'block' : 'none' },
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            bgcolor: '#F5F5F5',
            borderBottom: '1px solid #E8E8E8',
            boxShadow: '0 18px 40px rgba(11,19,36,0.08)',
          }}
          aria-hidden={openMega !== 'company'}
        >
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { lg: '1.2fr 0.8fr' },
                gap: 2,
              }}
            >
              <Box
                component="ul"
                role="menu"
                aria-label="Company"
                sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 0.5 }}
              >
                {HEADER_COMPANY_LINKS.map((link) => (
                  <Box component="li" key={link.href} sx={{ listStyle: 'none' }}>
                    <Box
                      component={Link}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setOpenMega(null)}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        borderRadius: 2,
                        bgcolor: '#fff',
                        border: '1px solid #E8E8E8',
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': { borderColor: 'primary.light' },
                      }}
                    >
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography sx={{ fontWeight: 700, color: '#0E251D', fontSize: '0.95rem' }}>
                          {link.title}
                        </Typography>
                        <Typography sx={{ color: '#505050', fontSize: '0.8rem', mt: 0.35 }}>
                          {link.desc}
                        </Typography>
                      </Box>
                      <Add sx={{ fontSize: 18, color: '#505050', transform: 'rotate(-45deg)' }} />
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                component={Link}
                href="/contact"
                onClick={() => setOpenMega(null)}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: 'secondary.main',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: '#A8C0FF', fontWeight: 800, fontSize: '0.68rem', letterSpacing: '0.12em', mb: 1 }}>
                  LET&apos;S TALK_
                </Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '1.15rem', mb: 1 }}>
                  Don&apos;t know where to start?
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.55 }}>
                  Book a discovery conversation.
                  <br />
                  No sales-script pitch.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </AppBar>

      {openMega && (
        <Box
          aria-hidden
          onClick={() => setOpenMega(null)}
          sx={{
            display: { xs: 'none', lg: 'block' },
            position: 'fixed',
            inset: 0,
            top: 90,
            bgcolor: 'transparent',
            zIndex: (t) => t.zIndex.appBar - 1,
          }}
        />
      )}

      <Drawer
        id="mobile-nav-drawer"
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
          // Prevent MUI from leaving body { overflow: hidden } after close —
          // that freezes the whole homepage so sections never scroll into view.
          disableScrollLock: true,
        }}
        PaperProps={{
          sx: { width: { xs: 320, sm: 360 }, bgcolor: '#F5F5F5' },
        }}
        sx={{ display: { lg: 'none' } }}
      >
        <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ position: 'relative', width: 140, height: 46 }}>
            <Image
              src="/header-logo.png"
              alt="ZeeShad"
              fill
              sizes="140px"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
          </Box>
          <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <List component="nav" aria-label="Mobile navigation" sx={{ px: 1.5 }}>
          {HEADER_NAV.map((item) => (
            <Box key={item.id}>
              <ListItem disablePadding sx={{ mb: 0.5 }}>
                {item.mega ? (
                  <ListItemButton
                    onClick={() => setMobileExpand(mobileExpand === item.id ? null : item.id)}
                    sx={{ borderRadius: 2 }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                      }}
                    />
                    <PlusIcon open={mobileExpand === item.id} />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    sx={{ borderRadius: 2 }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '0.85rem',
                      }}
                    />
                  </ListItemButton>
                )}
              </ListItem>
              {item.mega === 'services' && (
                <Collapse in={mobileExpand === 'services'}>
                  <List disablePadding sx={{ pl: 1, pb: 1 }}>
                    {SERVICE_TIERS.map((p) => (
                      <ListItemButton
                        key={p.slug}
                        component={Link}
                        href={p.href}
                        onClick={() => setMobileOpen(false)}
                        sx={{ borderRadius: 1.5 }}
                      >
                        <ListItemText primary={p.title} primaryTypographyProps={{ fontSize: '0.9rem' }} />
                      </ListItemButton>
                    ))}
                    <ListItemButton
                      component={Link}
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      sx={{ borderRadius: 1.5 }}
                    >
                      <ListItemText primary="All services" primaryTypographyProps={{ fontSize: '0.9rem' }} />
                    </ListItemButton>
                  </List>
                </Collapse>
              )}
            </Box>
          ))}
        </List>
        <Stack spacing={1.25} sx={{ p: 2.5 }}>
          <Button
            component={Link}
            href={HEADER_CTAS.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            fullWidth
            onClick={() => setMobileOpen(false)}
            sx={{ textTransform: 'none', fontWeight: 700, borderRadius: 1, py: 1.1 }}
          >
            {HEADER_CTAS.secondary.label}
          </Button>
          <Button
            component={Link}
            href={HEADER_CTAS.primary.href}
            variant="contained"
            fullWidth
            onClick={() => setMobileOpen(false)}
            sx={{ textTransform: 'none', fontWeight: 700, borderRadius: 1, py: 1.1 }}
          >
            {HEADER_CTAS.primary.label}
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
