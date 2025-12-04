'use client';

import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  useTheme,
  alpha,
} from '@mui/material';
import Link from 'next/link';
import {
  ArrowForward,
  Code,
  Cloud,
  Security,
  Analytics,
} from '@mui/icons-material';

const features = [
  { icon: Code, label: 'Software Development', color: '#2563eb' },
  { icon: Cloud, label: 'Cloud Computing', color: '#6366f1' },
  { icon: Security, label: 'Cybersecurity', color: '#10b981' },
  { icon: Analytics, label: 'Data Analytics', color: '#8b5cf6' },
];

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${alpha(theme.palette.grey[50], 1)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 50%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`,
        pt: { xs: '70px', sm: '80px', md: '20px' },
        pb: { xs: 4, sm: 5, md: 6 },
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.1)} 0%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 4s ease-in-out infinite 2s',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
          {/* Badge */}
          <Chip
            icon={<Code />}
            label="Leading IT Solutions Provider"
            sx={{
              mb: 4,
              py: 2.5,
              px: 1,
              bgcolor: 'background.paper',
              backdropFilter: 'blur(10px)',
              boxShadow: 2,
              fontWeight: 600,
              '& .MuiChip-icon': {
                color: 'primary.main',
              },
            }}
          />

          {/* Main Heading */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              color: 'text.primary',
              fontWeight: 800,
            }}
          >
            Transforming Businesses Through
            <Box
              component="span"
              sx={{
                display: 'block',
                mt: 1,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Innovative IT Solutions
            </Box>
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            ZeeShad (Private) Limited delivers cutting-edge information technology services 
            including software development, cloud computing, artificial intelligence, 
            cybersecurity, and digital transformation for domestic and international markets.
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              mb: 8,
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
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 3,
              }}
            >
              Get Started
            </Button>
            <Button
              component={Link}
              href="#services"
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 3,
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              Explore Services
            </Button>
          </Box>

          {/* Feature Icons */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, maxWidth: 800, mx: 'auto', justifyContent: 'center' }}>
            {features.map((feature, index) => (
              <Box key={index} sx={{ width: { xs: 'calc(50% - 12px)', sm: 'calc(25% - 18px)' } }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    bgcolor: alpha('#fff', 0.8),
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent sx={{ p: '0 !important' }}>
                    <feature.icon
                      sx={{
                        fontSize: 40,
                        color: feature.color,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {feature.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
