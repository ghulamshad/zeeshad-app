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
  BusinessCenter,
  RocketLaunch,
  ShoppingCart,
  AutoAwesome,
  CheckCircle,
} from '@mui/icons-material';
import Link from 'next/link';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  points: string[];
  color: string;
}

const features: Feature[] = [
  {
    icon: BusinessCenter,
    title: 'Custom ERP Solutions',
    description: 'Tailored enterprise resource planning systems that unify finance, inventory, HR, and operations.',
    points: [
      'Finance & accounting modules',
      'Inventory & supply chain',
      'HR & payroll integration',
      'Reporting & analytics',
    ],
    color: '#2563eb',
  },
  {
    icon: RocketLaunch,
    title: 'SaaS MVP Builds',
    description: 'From idea to launch: we build scalable, secure SaaS products with subscription and multi-tenant support.',
    points: [
      'Product discovery & scope',
      'Architecture & security',
      'Subscription & billing',
      'Launch & iteration',
    ],
    color: '#6366f1',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Systems',
    description: 'Full-featured online stores and marketplaces with payments, fulfillment, and growth tools.',
    points: [
      'Storefront & catalog',
      'Checkout & payments',
      'Multi-vendor marketplaces',
      'Integrations & APIs',
    ],
    color: '#10b981',
  },
  {
    icon: AutoAwesome,
    title: 'Business Automation',
    description: 'Streamline workflows, approvals, and integrations so your team can focus on what matters.',
    points: [
      'Workflow design & BPM',
      'Approvals & notifications',
      'System integrations',
      'Process analytics',
    ],
    color: '#f59e0b',
  },
];

export default function Features() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="features"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            textAlign: 'center',
            letterSpacing: 4,
            color: 'primary.main',
            fontWeight: 700,
            mb: 1,
          }}
        >
          What we build
        </Typography>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 }, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
            Focused on what moves your business
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
            Custom ERP, SaaS MVPs, e-commerce, and automation—delivered with a clear process and modern stack.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: alpha(feature.color, 0.4),
                    boxShadow: `0 12px 40px ${alpha(theme.palette.common.black, 0.4)}`,
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ color: feature.color, mb: 2 }}>
                    <feature.icon sx={{ fontSize: 48 }} />
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 1.5, fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    {feature.points.map((point, idx) => (
                      <ListItem key={idx} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle sx={{ fontSize: 18, color: feature.color }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={point}
                          primaryTypographyProps={{ variant: 'body2', sx: { fontSize: '0.875rem' } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            textAlign: 'center',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
            bgcolor: alpha(theme.palette.primary.main, 0.06),
          }}
        >
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
            Need something specific?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', maxWidth: 600, mx: 'auto', lineHeight: 1.7 }}>
            We also handle integrations, legacy modernization, and end-to-end product delivery.
          </Typography>
          <Button component={Link} href="#contact" variant="contained" sx={{ px: 4, py: 1.5 }}>
            Contact us for custom solutions
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
