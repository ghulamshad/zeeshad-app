'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';

const HERO_BG = '/images/slider/slide-1.png';
const HERO_RIGHT_IMAGE = '/images/hero-right.webp';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: '100svh', sm: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pt: { xs: 10, md: 1 },
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: {
            xs: 'none',
            md: `url(${HERO_BG})`,
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, ${alpha(theme.palette.common.black, 0.6)} 0%, ${alpha(theme.palette.common.black, 0.75)} 100%)`,
        }}
      />
      {/* Subtle gradient orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 3, sm: 4, md: 6 },
            alignItems: 'center',
            gridTemplateRows: { xs: 'auto auto', md: '1fr' },
          }}
        >
          {/* Left: text content — first on mobile */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, order: { xs: 0, md: 0 } }}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                letterSpacing: 4,
                color: 'primary.light',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Custom ERP · SaaS · E-commerce · Automation
            </Typography>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2,
                color: 'text.primary',
                fontWeight: 800,
                fontSize: { xs: 'clamp(1.75rem, 5vw, 2.5rem)', md: 'clamp(2rem, 3vw, 2.75rem)' },
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Build what your business needs.
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: { md: 480 },
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Custom ERP solutions, SaaS MVPs, e-commerce systems, and business automation—from idea to launch.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
              }}
            >
              <Button
                component={Link}
                href="#contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: '1.05rem',
                  borderRadius: 2,
                }}
              >
                Get in Touch
              </Button>
              <Button
                component={Link}
                href="#features"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.75,
                  fontSize: '1.05rem',
                  borderRadius: 2,
                  borderColor: alpha(theme.palette.common.white, 0.4),
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                  },
                }}
              >
                Explore solutions
              </Button>
            </Box>

            
          </Box>

          {/* Right: hero image — second on mobile, responsive sizing */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: { xs: 2, md: 3 },
              overflow: 'hidden',
              border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
              width: '100%',
              maxWidth: { xs: 360, sm: 420, md: 'none' },
              mx: { xs: 'auto', md: 0 },
              aspectRatio: { xs: '4/3', sm: '16/10', md: '4/5' },
              maxHeight: { xs: 280, sm: 320, md: 520 },
              minHeight: 0,
              bgcolor: alpha(theme.palette.background.paper, 0.3),
              order: { xs: 1, md: 0 },
            }}
          >
            <Image
              src={HERO_RIGHT_IMAGE}
              alt="ZeeShad IT solutions"
              fill
              sizes="(max-width: 600px) 360px, (max-width: 960px) 420px, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
