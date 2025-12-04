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
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import {
  QrCode2,
  BusinessCenter,
  PointOfSale,
  School,
  Launch,
  ArrowForward,
  FiberManualRecord,
} from '@mui/icons-material';
import Link from 'next/link';

interface Product {
  icon: React.ElementType;
  name: string;
  description: string;
  features: string[];
  link?: string;
  color: string;
}

const products: Product[] = [
  {
    icon: QrCode2,
    name: 'Qr-Codify',
    description: 'Advanced QR code generation and management platform for businesses of all sizes.',
    features: [
      'Dynamic QR Code Generation',
      'Custom Branding & Design',
      'Analytics & Tracking',
      'Bulk QR Code Creation',
      'API Integration',
    ],
    link: 'https://qr-codify.com',
    color: '#6366f1',
  },
  {
    icon: BusinessCenter,
    name: 'Z-ERP',
    description: 'Comprehensive Enterprise Resource Planning solution for streamlined business operations.',
    features: [
      'Financial Management',
      'Inventory Control',
      'HR & Payroll',
      'Sales & CRM',
      'Reporting & Analytics',
    ],
    color: '#2563eb',
  },
  {
    icon: PointOfSale,
    name: 'Z-POS',
    description: 'Modern Point of Sale system designed for retail and hospitality businesses.',
    features: [
      'Real-time Sales Processing',
      'Inventory Management',
      'Payment Integration',
      'Receipt Generation',
      'Multi-location Support',
    ],
    color: '#10b981',
  },
  {
    icon: School,
    name: 'ZeeShad Academy',
    description: 'Professional IT training and certification programs in emerging technologies.',
    features: [
      'Technical Training Courses',
      'Industry Certifications',
      'Hands-on Workshops',
      'Online & In-person Classes',
      'Career Development Programs',
    ],
    color: '#8b5cf6',
  },
];

export default function Products() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: '70px', sm: '80px', md: '20px' },
        background: `linear-gradient(135deg, ${alpha(theme.palette.grey[50], 1)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 50%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`,
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
            Our <Box component="span" sx={{ color: 'primary.main' }}>Products</Box>
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
          >
            Innovative software solutions and training programs designed to empower businesses 
            and professionals in the digital age.
          </Typography>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3} sx={{ mb: { xs: 4, md: 5 } }}>
          {products.map((product, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: alpha(product.color, 0.05),
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                    '&::before': {
                      opacity: 0.05,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${product.color} 0%, ${alpha(product.color, 0.5)} 100%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    borderRadius: 2,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ color: product.color }}>
                      <product.icon sx={{ fontSize: 48 }} />
                    </Box>
                    {product.link && (
                      <IconButton
                        component="a"
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                          },
                        }}
                      >
                        <Launch />
                      </IconButton>
                    )}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 1.5,
                      fontWeight: 700,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {product.description}
                  </Typography>

                  <List dense sx={{ p: 0, mb: 2 }}>
                    {product.features.map((feature, idx) => (
                      <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <FiberManualRecord
                            sx={{
                              fontSize: 8,
                              color: product.color,
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

                  <Box sx={{ pt: 2, borderTop: 1, borderColor: 'divider' }}>
                    {product.link ? (
                      <Button
                        component="a"
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowForward />}
                        sx={{
                          color: product.color,
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: alpha(product.color, 0.1),
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    ) : (
                      <Button
                        component={Link}
                        href="#contact"
                        endIcon={<ArrowForward />}
                        sx={{
                          color: product.color,
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: alpha(product.color, 0.1),
                          },
                        }}
                      >
                        Contact Us
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            textAlign: 'center',
            boxShadow: 4,
            maxWidth: 900,
            mx: 'auto',
            mt: { xs: 4, md: 5 },
          }}
        >
          <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 700 }}>
            Looking for Custom Solutions?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Our products are designed to be scalable and customizable. We also offer 
            custom development services to tailor solutions specifically to your business needs.
          </Typography>
          <Button
            component={Link}
            href="#contact"
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
            }}
          >
            Get Custom Solution
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
