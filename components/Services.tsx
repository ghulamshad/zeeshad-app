'use client';

import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Code,
  Cloud,
  Security,
  Analytics,
  PhoneAndroid,
  BusinessCenter,
  Storage,
  NetworkCheck,
  Psychology,
  School,
  Settings,
  IntegrationInstructions,
  CheckCircle,
} from '@mui/icons-material';
import Link from 'next/link';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom web, mobile, and enterprise applications built with cutting-edge technologies.',
    features: [
      'Web & Mobile Applications',
      'Enterprise Software Solutions',
      'API Development & Integration',
      'Quality Assurance & Testing',
    ],
    color: '#2563eb',
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and services for modern business needs.',
    features: [
      'Cloud Migration & Strategy',
      'Infrastructure as a Service',
      'Data Hosting & Management',
      'Multi-Cloud Solutions',
    ],
    color: '#6366f1',
  },
  {
    icon: Psychology,
    title: 'Artificial Intelligence',
    description: 'AI-powered solutions to automate processes and drive intelligent decision-making.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'AI Strategy & Consulting',
    ],
    color: '#8b5cf6',
  },
  {
    icon: Analytics,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights for strategic business decisions.',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Big Data Solutions',
    ],
    color: '#10b981',
  },
  {
    icon: Security,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
    features: [
      'Security Audits & Assessments',
      'Threat Detection & Prevention',
      'Data Protection & Encryption',
      'Compliance & Risk Management',
    ],
    color: '#ef4444',
  },
  {
    icon: NetworkCheck,
    title: 'Networking Solutions',
    description: 'Robust networking infrastructure for seamless connectivity and communication.',
    features: [
      'Network Design & Implementation',
      'Network Security',
      'Wireless Solutions',
      'Network Monitoring & Support',
    ],
    color: '#f59e0b',
  },
  {
    icon: BusinessCenter,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business operations.',
    features: [
      'Digital Strategy Consulting',
      'Process Automation',
      'Digital Workflow Optimization',
      'Change Management',
    ],
    color: '#14b8a6',
  },
  {
    icon: Settings,
    title: 'IT Consultancy',
    description: 'Expert IT consulting to align technology with your business objectives.',
    features: [
      'Technology Assessment',
      'IT Strategy & Planning',
      'System Integration',
      'Vendor Management',
    ],
    color: '#06b6d4',
  },
  {
    icon: IntegrationInstructions,
    title: 'Systems Integration',
    description: 'Seamless integration of disparate systems for unified operations.',
    features: [
      'API Integration',
      'Legacy System Modernization',
      'Third-Party Integrations',
      'Middleware Solutions',
    ],
    color: '#ec4899',
  },
  {
    icon: Storage,
    title: 'Hardware Solutions',
    description: 'Complete hardware solutions from design to implementation and support.',
    features: [
      'Hardware Procurement',
      'Infrastructure Setup',
      'Hardware Maintenance',
      'Equipment Lifecycle Management',
    ],
    color: '#f59e0b',
  },
  {
    icon: PhoneAndroid,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'iOS & Android Apps',
      'Cross-Platform Development',
      'Mobile UI/UX Design',
      'App Store Optimization',
    ],
    color: '#10b981',
  },
  {
    icon: School,
    title: 'IT Training & R&D',
    description: 'Professional training programs and research in emerging technologies.',
    features: [
      'Technical Training Programs',
      'Certification Courses',
      'R&D in Emerging Tech',
      'Knowledge Transfer',
    ],
    color: '#8b5cf6',
  },
];

export default function Services() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: { xs: '70px', sm: '80px', md: '20px' },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
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
            Our <Box component="span" sx={{ color: 'primary.main' }}>Services</Box>
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
          >
            Comprehensive IT solutions tailored to your business needs, 
            from software development to digital transformation.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(33.33% - 18px)' } }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: alpha(service.color, 0.05),
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    sx={{
                      color: service.color,
                      mb: 2,
                    }}
                  >
                    <service.icon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 1.5,
                      fontWeight: 700,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle
                            sx={{
                              fontSize: 18,
                              color: service.color,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: { fontSize: '0.875rem' },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Grid>

        {/* Additional Services Note */}
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            color: 'white',
            boxShadow: 8,
          }}
        >
          <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
            Need Something Specific?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              opacity: 0.95,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            We also provide outsourcing services, project management, 
            software quality assurance, and custom IT solutions.
          </Typography>
          <Button
            component={Link}
            href="#contact"
            variant="contained"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: alpha('#fff', 0.9),
              },
            }}
          >
            Contact Us for Custom Solutions
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
