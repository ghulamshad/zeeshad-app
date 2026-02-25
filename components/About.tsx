'use client';

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Business,
  LocationOn,
  Verified,
  TrendingUp,
  People,
  Public,
} from '@mui/icons-material';

const stats = [
  { icon: Business, label: 'Company Type', value: 'Private Limited' },
  { icon: LocationOn, label: 'Registered Office', value: 'Karachi, Pakistan' },
  { icon: Verified, label: 'Incorporated Under', value: 'Companies Act, 2017' },
  { icon: Public, label: 'Market Reach', value: 'Domestic & International' },
];

const capabilities = [
  {
    title: 'Development Centers',
    description: 'State-of-the-art software and hardware development centers with cutting-edge infrastructure.',
  },
  {
    title: 'IT Laboratories',
    description: 'Dedicated R&D facilities for research and development in computer sciences and emerging technologies.',
  },
  {
    title: 'Training Facilities',
    description: 'Professional training centers offering technical education in hardware, software, and emerging technologies.',
  },
  {
    title: 'Global Operations',
    description: 'Serving both domestic and international markets with scalable IT solutions and services.',
  },
];

export default function About() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 }, maxWidth: 800, mx: 'auto' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            About <Box component="span" sx={{ color: 'primary.main' }}>ZeeShad</Box>
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
          >
            A leading IT services company committed to delivering innovative 
            technology solutions and digital transformation services.
          </Typography>
        </Box>

        {/* Company Overview */}
        <Card
          sx={{
            mb: { xs: 4, md: 5 },
            bgcolor: 'background.paper',
            border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 700 }}>
              ZeeShad (Private) Limited
            </Typography>
            <Box sx={{ '& > p': { mb: 2, lineHeight: 1.8, color: 'text.secondary' } }}>
              <Typography>
                ZeeShad (Private) Limited is a company incorporated under the{' '}
                <Box component="strong" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Companies Act, 2017 (XIX of 2017)
                </Box>
                , limited by shares, with its registered office situated at{' '}
                <Box component="strong" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  D-17 Ground Floor, Gulistan Society, Quaidabad, Karachi, Pakistan
                </Box>
                .
              </Typography>
              <Typography>
                Our principal line of business encompasses comprehensive information technology 
                services, including but not limited to software development, hardware solutions, 
                IT consultancy, digital transformation, cloud computing, artificial intelligence, 
                data analytics, cybersecurity, networking, web and mobile application development, 
                project management, systems design and integration, software quality assurance, 
                and outsourcing of IT and telecommunication services.
              </Typography>
              <Typography>
                We are empowered to establish and operate data processing centers, software and 
                hardware development centers, IT laboratories, and training facilities. Our 
                services extend to providing IT consultancy, system integration, business process 
                optimization, and professional training in computer hardware, software, and 
                emerging technologies.
              </Typography>
              <Typography>
                ZeeShad operates with full authority to engage in all lawful businesses and take 
                all necessary steps and actions in connection therewith, serving both domestic 
                and international markets with excellence and innovation.
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: { xs: 4, md: 5 } }}>
          {stats.map((stat, index) => (
            <Box key={index} sx={{ width: { xs: 'calc(50% - 12px)', sm: 'calc(50% - 12px)', md: 'calc(25% - 18px)' } }}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent>
                  <stat.icon
                    sx={{
                      fontSize: 40,
                      color: 'primary.main',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h5" component="div" sx={{ mb: 1, fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Capabilities */}
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: 'center',
              mb: { xs: 3, md: 4 },
              fontWeight: 700,
            }}
          >
            Our <Box component="span" sx={{ color: 'primary.main' }}>Capabilities</Box>
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {capabilities.map((capability, index) => (
              <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <TrendingUp sx={{ color: 'primary.main', fontSize: 28 }} />
                      </Box>
                      <Typography variant="h5" component="h4" sx={{ fontWeight: 700 }}>
                        {capability.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {capability.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Mission Statement */}
        <Box
          sx={{
            borderRadius: { xs: 3, md: 4 },
            p: { xs: 4, md: 5 },
            textAlign: 'center',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
            bgcolor: alpha(theme.palette.primary.main, 0.08),
          }}
        >
          <People sx={{ fontSize: 60, mb: 3, color: 'primary.main', opacity: 0.9 }} />
          <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              color: 'text.secondary',
              lineHeight: 1.8,
            }}
          >
            To empower businesses through innovative IT solutions, cutting-edge technology, 
            and exceptional service delivery. We strive to be the trusted partner for 
            organizations seeking digital transformation and technological excellence in 
            the ever-evolving digital landscape.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
