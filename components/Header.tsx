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
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Close, Add, NorthEast } from '@mui/icons-material';
import BrandMark from '@/components/BrandMark';
import {
  HEADER_COMPANY_LINKS,
  HEADER_CTAS,
  HEADER_NAV,
  PRODUCTS,
  SOLUTION_PILLARS,
} from '@/lib/content/site';

type MegaId = 'solutions' | 'products' | 'company';

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
      onClick={() => {
        setOpenMega(null);
        setMobileOpen(false);
      }}
      sx={{
        fontSize: '0.8125rem',
        fontWeight: 700,
        px: 2,
        py: 1,
        minHeight: 40,
        borderRadius: 1,
        textTransform: 'none',
        whiteSpace: 'nowrap',
        boxShadow: 'none',
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
          bgcolor: '#F5F5F5',
          color: '#505050',
          borderBottom: openMega ? 'none' : '1px solid #E8E8E8',
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
                gap: 1.25,
                textDecoration: 'none',
                color: 'inherit',
                flexShrink: 0,
              }}
            >
              <BrandMark size={40} />
              <Typography
                sx={{
                  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '1.1rem', lg: '1.2rem' },
                  color: '#0E251D',
                  letterSpacing: '-0.02em',
                }}
              >
                ZeeShad
              </Typography>
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
                          if (item.mega) openPanel(item.mega);
                          else {
                            clearCloseTimer();
                            setOpenMega(null);
                          }
                        }}
                        onFocus={() => {
                          if (item.mega) openPanel(item.mega);
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
                  borderRadius: 1,
                  textTransform: 'none',
                  borderColor: '#C9CED6',
                  color: '#0E251D',
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

        {/* Solutions mega */}
        <Box
          onMouseEnter={() => openPanel('solutions')}
          onMouseLeave={scheduleClose}
          sx={{
            display: { xs: 'none', lg: openMega === 'solutions' ? 'block' : 'none' },
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            bgcolor: '#F5F5F5',
            borderBottom: '1px solid #E8E8E8',
            boxShadow: '0 18px 40px rgba(11,19,36,0.08)',
          }}
          aria-hidden={openMega !== 'solutions'}
        >
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { lg: '1fr 1fr 0.85fr' },
                gap: 2,
              }}
            >
              {SOLUTION_PILLARS.map((pillar, i) => (
                <Box
                  key={pillar.slug}
                  component={Link}
                  href={pillar.href}
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
                    SOLUTION {String(i + 1).padStart(2, '0')}_
                  </Typography>
                  <Typography sx={{ fontWeight: 800, color: '#0E251D', mb: 1, fontSize: '1.05rem' }}>
                    {pillar.title}_
                  </Typography>
                  <Typography sx={{ color: '#505050', fontSize: '0.875rem', lineHeight: 1.6, flexGrow: 1 }}>
                    {pillar.outcome}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', mt: 2, lineHeight: 1.5 }}>
                    {pillar.problem}
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
                    LET&apos;S TALK_
                  </Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: '1.25rem', mb: 1, lineHeight: 1.25 }}>
                    Don&apos;t know where to start?
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                    Book a discovery conversation.
                    <br />
                    Straight next steps—no invented pitch.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Products mega */}
        <Box
          onMouseEnter={() => openPanel('products')}
          onMouseLeave={scheduleClose}
          sx={{
            display: { xs: 'none', lg: openMega === 'products' ? 'block' : 'none' },
            position: 'absolute',
            left: 0,
            right: 0,
            top: '100%',
            bgcolor: '#F5F5F5',
            borderBottom: '1px solid #E8E8E8',
            boxShadow: '0 18px 40px rgba(11,19,36,0.08)',
          }}
          aria-hidden={openMega !== 'products'}
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
                aria-label="Products"
                sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 0.5 }}
              >
                {PRODUCTS.map((product) => (
                  <Box component="li" key={product.slug} sx={{ listStyle: 'none' }}>
                    <Box
                      component={Link}
                      href={`/products/${product.slug}`}
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
                      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 700, color: '#0E251D', fontSize: '0.95rem' }}>
                          {product.name}
                        </Typography>
                        <Typography sx={{ color: '#505050', fontSize: '0.8rem', mt: 0.35 }}>
                          {product.status} · {product.purpose.slice(0, 72)}
                          {product.purpose.length > 72 ? '…' : ''}
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
                  minHeight: 180,
                }}
              >
                <Typography sx={{ color: '#A8C0FF', fontWeight: 800, fontSize: '0.68rem', letterSpacing: '0.12em', mb: 1 }}>
                  LET&apos;S TALK_
                </Typography>
                <Typography sx={{ fontWeight: 800, fontSize: '1.15rem', mb: 1 }}>
                  Need a demo or a custom build?
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.55 }}>
                  Request ZeeShad Desk access or discuss an ERP/POS engagement.
                </Typography>
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
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: { xs: 320, sm: 360 }, bgcolor: '#F5F5F5' },
        }}
        sx={{ display: { lg: 'none' } }}
      >
        <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 800, color: '#0E251D' }}>
            ZeeShad
          </Typography>
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
              {item.mega === 'solutions' && (
                <Collapse in={mobileExpand === 'solutions'}>
                  <List disablePadding sx={{ pl: 1, pb: 1 }}>
                    {SOLUTION_PILLARS.map((p) => (
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
                  </List>
                </Collapse>
              )}
              {item.mega === 'products' && (
                <Collapse in={mobileExpand === 'products'}>
                  <List disablePadding sx={{ pl: 1, pb: 1 }}>
                    {PRODUCTS.map((p) => (
                      <ListItemButton
                        key={p.slug}
                        component={Link}
                        href={`/products/${p.slug}`}
                        onClick={() => setMobileOpen(false)}
                        sx={{ borderRadius: 1.5 }}
                      >
                        <ListItemText primary={p.name} primaryTypographyProps={{ fontSize: '0.9rem' }} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
              {item.mega === 'company' && (
                <Collapse in={mobileExpand === 'company'}>
                  <List disablePadding sx={{ pl: 1, pb: 1 }}>
                    {HEADER_COMPANY_LINKS.map((l) => (
                      <ListItemButton
                        key={l.href}
                        component={Link}
                        href={l.href}
                        onClick={() => setMobileOpen(false)}
                        sx={{ borderRadius: 1.5 }}
                      >
                        <ListItemText primary={l.title} primaryTypographyProps={{ fontSize: '0.9rem' }} />
                      </ListItemButton>
                    ))}
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
