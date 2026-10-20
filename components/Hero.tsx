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
import { ArrowForward, WhatsApp } from '@mui/icons-material';

const HERO_BG = '/images/slider/slide-1.png';
const HERO_RIGHT_IMAGE = '/images/hero-right.png';
const WHATSAPP_URL = 'https://wa.me/923040058323';

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
          bgcolor: 'background.default',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, ${alpha(theme.palette.common.black, 0.65)} 0%, ${alpha(theme.palette.common.black, 0.8)} 100%)`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 3, sm: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                letterSpacing: 3,
                color: 'primary.light',
                fontWeight: 700,
                mb: 2,
              }}
            >
              ZeeShad Software Delivery · Karachi
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
              Custom ERP, SaaS MVP and e-commerce builds that fit how you actually work.
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: { md: 520 },
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              For SME and mid-size operators who need finance, inventory, sales or workflows
              under one system—or a first SaaS or store that ships without a bloated IT menu.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                component={Link}
                href="#contact"
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ px: 4, py: 1.75, fontSize: '1.05rem', borderRadius: 2 }}
              >
                Request a scope & estimate
              </Button>
              <Button
                component="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="large"
                startIcon={<WhatsApp />}
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
                WhatsApp us
              </Button>
            </Box>
          </Box>

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
            }}
          >
            <Image
              src={HERO_RIGHT_IMAGE}
              alt="Custom software delivery for ERP, SaaS and e-commerce"
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
