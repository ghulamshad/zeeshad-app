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
  ctaLabel: string;
}

const products: Product[] = [
  {
    icon: QrCode2,
    name: 'Qr-Codify',
    description:
      'Our live QR code generation and management product for brands that need dynamic codes, branding and tracking.',
    features: [
      'Dynamic QR code generation',
      'Custom branding & design',
      'Analytics & tracking',
      'Bulk creation & API',
    ],
    link: 'https://qr-codify.com',
    color: '#6366f1',
    ctaLabel: 'Learn more about Qr-Codify',
  },
  {
    icon: BusinessCenter,
    name: 'Z-ERP framework',
    description:
      'An internal ERP delivery framework we use on client projects—finance, inventory, HR and reporting modules assembled to fit your process. Not a public SaaS product.',
    features: [
      'Financial management modules',
      'Inventory & supply chain',
      'HR & payroll building blocks',
      'Reporting tailored to your ops',
    ],
    color: '#2563eb',
    ctaLabel: 'Ask about an ERP build',
  },
  {
    icon: PointOfSale,
    name: 'Z-POS framework',
    description:
      'A POS-oriented framework we adapt for retail and hospitality projects. Ask for a walkthrough if you need counter sales tied to inventory.',
    features: [
      'Sales processing patterns',
      'Inventory hooks',
      'Payment integration patterns',
      'Multi-location support patterns',
    ],
    color: '#10b981',
    ctaLabel: 'Ask about a POS build',
  },
];

export default function Products() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 }, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
            Products &{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              frameworks
            </Box>
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
            One live product. Two delivery frameworks we use on client builds—labelled
            honestly so you know what you are looking at.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: { xs: 4, md: 5 } }}>
          {products.map((product) => (
            <Grid size={{ xs: 12, md: 4 }} key={product.name}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.default',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ color: product.color }}>
                      <product.icon sx={{ fontSize: 48 }} />
                    </Box>
                    {product.link && (
                      <IconButton
                        component="a"
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open Qr-Codify website"
                        size="small"
                        sx={{ color: 'text.secondary' }}
                      >
                        <Launch />
                      </IconButton>
                    )}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 1.5, fontWeight: 700 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.7 }}>
                    {product.description}
                  </Typography>
                  <List dense sx={{ p: 0, mb: 2 }}>
                    {product.features.map((feature) => (
                      <ListItem key={feature} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <FiberManualRecord sx={{ fontSize: 8, color: product.color }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{ variant: 'body2', sx: { fontSize: '0.875rem' } }}
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
                        sx={{ color: product.color, fontWeight: 600 }}
                      >
                        {product.ctaLabel}
                      </Button>
                    ) : (
                      <Button
                        component={Link}
                        href="#contact"
                        endIcon={<ArrowForward />}
                        sx={{ color: product.color, fontWeight: 600 }}
                      >
                        {product.ctaLabel}
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
