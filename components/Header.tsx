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
  Fade,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Close, ArrowForward } from '@mui/icons-material';

export default function Header() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Active section detection
      const sections = ['home', 'features', 'case-studies', 'about', 'testimonials', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Throttle scroll events for better performance
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
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#features', label: 'Features', id: 'features' },
    { href: '#case-studies', label: 'Case Studies', id: 'case-studies' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const drawer = (
    <Box
      sx={{
        width: { xs: 280, sm: 320 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
      }}
    >
      {/* Mobile Header */}
      <Box
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: 1,
          borderColor: 'divider',
          bgcolor: alpha(theme.palette.primary.main, 0.05),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              position: 'relative',
              width: 56,
              height: 56,
              flexShrink: 0,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Image
              src="/header-logo.png"
              alt="ZeeShad Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: '1.2rem',
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
                fontSize: '0.7rem',
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
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: 'text.primary',
            '&:hover': {
              bgcolor: alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          <Close />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding sx={{ mb: 0.5, px: 2 }}>
            <ListItemButton
              onClick={() => handleNavClick(item.href)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: activeSection === item.id ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                color: activeSection === item.id ? 'primary.main' : 'text.primary',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: 3,
                  bgcolor: 'primary.main',
                  transform: activeSection === item.id ? 'scaleY(1)' : 'scaleY(0)',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  transform: 'translateX(8px)',
                  '&::before': {
                    transform: 'scaleY(1)',
                  },
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: activeSection === item.id ? 600 : 500,
                  fontSize: '1rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* CTA Button */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <Button
          component={Link}
          href="#contact"
          variant="contained"
          fullWidth
          endIcon={<ArrowForward />}
          onClick={handleDrawerToggle}
          sx={{
            py: 1.5,
            borderRadius: 3,
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: 4,
            '&:hover': {
              boxShadow: 8,
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        ref={headerRef}
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: theme.zIndex.appBar,
          backgroundColor: alpha(theme.palette.background.default, scrolled ? 0.98 : 0.9),
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'blur(12px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
          boxShadow: scrolled ? `0 4px 24px rgba(0,0,0,0.3)` : 'none',
        }}
      >
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                minHeight: { xs: 70, sm: 80, md: 90 },
                py: { xs: 1, md: 0 },
                transition: 'all 0.3s ease',
              }}
            >
              {/* Logo */}
              <Fade in timeout={600}>
                <Box
                  component={Link}
                  href="/"
                  onClick={() => handleNavClick('#home')}
                  className="logo-container"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, md: 2 },
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      '& .logo-image': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <Box
                    className="logo-image"
                    sx={{
                      position: 'relative',
                      width: { xs: 100, sm: 100, md: 100 },
                      height: { xs: 50, sm: 56, md: scrolled ? 56 : 64 },
                      flexShrink: 0,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Image
                      src="/header-logo.png"
                      alt="ZeeShad Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                      sizes="(max-width: 640px) 50px, (max-width: 960px) 56px, 164px"
                    />
                  </Box>
                  <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.15rem' },
                        lineHeight: 1.2,
                        mb: 0.25,
                        color: 'text.primary',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      ZeeShad
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.75rem' },
                        color: 'text.secondary',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        display: 'block',
                        opacity: 0.85,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      Innovative IT Solutions
                    </Typography>
                  </Box>
                </Box>
              </Fade>

              {/* Desktop Navigation */}
              <Box
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  gap: 0.5,
                  alignItems: 'center',
                  flexGrow: 1,
                  justifyContent: 'center',
                }}
              >
                {navItems.map((item, index) => (
                  <Fade in timeout={600} key={item.href} style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
                    <Button
                      component={Link}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      sx={{
                        color: activeSection === item.id ? 'primary.main' : 'text.primary',
                        fontWeight: activeSection === item.id ? 600 : 500,
                        px: 2.5,
                        py: 1,
                        position: 'relative',
                        borderRadius: 2,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 8,
                          left: '50%',
                          transform: activeSection === item.id
                            ? 'translateX(-50%) scaleX(1)'
                            : 'translateX(-50%) scaleX(0)',
                          width: '60%',
                          height: 2,
                          bgcolor: 'primary.main',
                          borderRadius: 1,
                          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                        '&:hover': {
                          color: 'primary.main',
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          transform: 'translateY(-2px)',
                          '&::after': {
                            transform: 'translateX(-50%) scaleX(1)',
                          },
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Fade>
                ))}
              </Box>

              {/* CTA Button */}
              <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', ml: 2 }}>
                <Fade in timeout={800}>
                  <Button
                    component={Link}
                    href="#contact"
                    variant="contained"
                    endIcon={<ArrowForward />}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#contact');
                    }}
                    sx={{
                      px: 3.5,
                      py: 1.5,
                      borderRadius: 3,
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      boxShadow: 4,
                      background: theme.palette.primary.main,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        boxShadow: '0 0 24px rgba(14, 165, 233, 0.4)',
                        transform: 'translateY(-2px)',
                        background: theme.palette.primary.light,
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Fade>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { lg: 'none' },
                  ml: 'auto',
                  p: 1.5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    transform: 'rotate(90deg)',
                  },
                }}
              >
                {mobileOpen ? (
                  <Close sx={{ fontSize: 28 }} />
                ) : (
                  <Menu sx={{ fontSize: 28 }} />
                )}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        PaperProps={{
          sx: {
            width: { xs: 280, sm: 320 },
            boxShadow: `-4px 0 24px ${alpha(theme.palette.common.black, 0.15)}`,
          },
        }}
        sx={{
          display: { lg: 'none' },
          '& .MuiBackdrop-root': {
            bgcolor: alpha(theme.palette.common.black, 0.5),
            backdropFilter: 'blur(4px)',
          },
        }}
        transitionDuration={300}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed header - prevents content from going under header */}
      <Toolbar
        sx={{
          minHeight: { xs: 70, sm: 80, md: 90 },
        }}
      />
    </>
  );
}
