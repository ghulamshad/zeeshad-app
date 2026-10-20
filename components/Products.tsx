'use client';

import { Container, Box, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowForward, Launch } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';

const products = [
  {
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
    ctaLabel: 'Learn more about Qr-Codify',
    badge: 'Live product',
  },
  {
    name: 'Z-ERP framework',
    description:
      'An internal ERP delivery framework we use on client projects—finance, inventory, HR and reporting modules assembled to fit your process. Not a public SaaS product.',
    features: [
      'Financial management modules',
      'Inventory & supply chain',
      'HR & payroll building blocks',
      'Reporting tailored to your ops',
    ],
    ctaLabel: 'Ask about an ERP build',
    badge: 'Delivery framework',
  },
  {
    name: 'Z-POS framework',
    description:
      'A POS-oriented framework we adapt for retail and hospitality projects. Ask for a walkthrough if you need counter sales tied to inventory.',
    features: [
      'Sales processing patterns',
      'Inventory hooks',
      'Payment integration patterns',
      'Multi-location support patterns',
    ],
    ctaLabel: 'Ask about a POS build',
    badge: 'Delivery framework',
  },
];

export default function Products() {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: 9, md: 12 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            mb: { xs: 6, md: 8 },
            alignItems: 'end',
          }}
        >
          <Reveal>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Business Solutions · Products
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
              One live product. Two frameworks we use on client builds.
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 500 }}>
              Part of our Business Solutions line—labelled honestly so you know what is a public
              product versus an internal delivery framework.
            </Typography>
          </Reveal>
          <Reveal delay={0.12}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                maxWidth: { md: 380 },
                ml: { md: 'auto' },
                borderRadius: 2,
                overflow: 'hidden',
                bgcolor: 'grey.100',
              }}
            >
              <Image
                src="/images/brand/systems-modules.jpg"
                alt="Modular systems representing ZeeShad business solution frameworks"
                fill
                sizes="(max-width: 900px) 100vw, 380px"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Reveal>
        </Box>

        <Stagger>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 0 },
            }}
          >
            {products.map((product, i) => (
              <StaggerItem key={product.name}>
                <Box
                  sx={{
                    height: '100%',
                    px: { md: 3 },
                    py: { xs: 3, md: 0 },
                    borderLeft: {
                      xs: 'none',
                      md: i === 0 ? 'none' : '1px solid',
                    },
                    borderTop: {
                      xs: i === 0 ? 'none' : '1px solid',
                      md: 'none',
                    },
                    borderColor: 'divider !important',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: 'text.secondary', mb: 1.5, display: 'block' }}
                  >
                    {product.badge}
                  </Typography>
                  <Typography variant="h3" component="h3" sx={{ mb: 1.5, fontSize: '1.4rem' }}>
                    {product.name}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 3, flexGrow: 1, lineHeight: 1.7 }}>
                    {product.description}
                  </Typography>
                  <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mb: 3 }}>
                    {product.features.map((f) => (
                      <Box
                        component="li"
                        key={f}
                        sx={{
                          py: 0.75,
                          borderTop: '1px solid',
                          borderColor: 'divider',
                          fontSize: '0.9rem',
                          color: 'text.secondary',
                          '&:last-of-type': { borderBottom: '1px solid', borderColor: 'divider' },
                        }}
                      >
                        {f}
                      </Box>
                    ))}
                  </Box>
                  <Stack direction="row" spacing={1} alignItems="center">
                    {product.link ? (
                      <Button
                        component="a"
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<Launch sx={{ fontSize: 16 }} />}
                        sx={{ color: 'primary.main', fontWeight: 700, px: 0 }}
                      >
                        {product.ctaLabel}
                      </Button>
                    ) : (
                      <Button
                        component={Link}
                        href="#contact"
                        endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                        sx={{ color: 'primary.main', fontWeight: 700, px: 0 }}
                      >
                        {product.ctaLabel}
                      </Button>
                    )}
                  </Stack>
                </Box>
              </StaggerItem>
            ))}
          </Box>
        </Stagger>
      </Container>
    </Box>
  );
}
