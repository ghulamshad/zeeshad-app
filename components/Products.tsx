'use client';

import { Container, Box, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { ArrowForward, Launch } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { MARKETING_TEASER } from '@/lib/content/solutions';
import { PRODUCTS } from '@/lib/content/site';

export default function Products() {
  return (
    <>
      <Box
        component="section"
        id="marketing"
        sx={{
          py: { xs: 9, md: 11 },
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
          scrollMarginTop: 96,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 7 },
              alignItems: 'start',
            }}
          >
            <Reveal>
              <Typography variant="overline" sx={{ color: 'marketing.main', mb: 1.5, display: 'block' }}>
                {MARKETING_TEASER.eyebrow}
              </Typography>
              <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
                {MARKETING_TEASER.h2}
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 3.5, fontSize: '1.05rem', maxWidth: 480 }}>
                {MARKETING_TEASER.line}
              </Typography>
              <Button
                component={Link}
                href="/contact?interest=Digital%20marketing"
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'marketing.main',
                  '&:hover': { bgcolor: 'marketing.dark' },
                }}
              >
                Discuss marketing work
              </Button>
            </Reveal>

            <Stagger>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {MARKETING_TEASER.items.map((item) => {
                  const [title, line] = item.split(' — ');
                  return (
                    <StaggerItem key={item}>
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2.5,
                          bgcolor: 'marketing.light',
                          height: '100%',
                        }}
                      >
                        <Typography sx={{ fontWeight: 700, mb: 0.75, fontSize: '0.95rem' }}>
                          {title}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: '0.875rem', lineHeight: 1.6 }}>
                          {line}
                        </Typography>
                      </Box>
                    </StaggerItem>
                  );
                })}
              </Box>
            </Stagger>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        id="products"
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'background.default',
          scrollMarginTop: 96,
        }}
      >
        <Container maxWidth="lg">
          <Reveal>
            <Typography variant="overline" sx={{ color: 'products.main', mb: 1.5, display: 'block' }}>
              Products
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 640 }}>
              Live products and delivery frameworks—labelled honestly
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 4, maxWidth: 560 }}>
              Commercial products you can open today, plus internal frameworks used on custom builds.
            </Typography>
          </Reveal>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
              gap: 2.5,
              mb: 4,
            }}
          >
            {PRODUCTS.map((product) => (
              <Box
                key={product.slug}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="overline" sx={{ color: 'products.main', mb: 1, display: 'block' }}>
                  {product.status}
                </Typography>
                <Typography variant="h3" component="h3" sx={{ mb: 1.25, fontSize: '1.2rem' }}>
                  {product.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 3, flexGrow: 1, lineHeight: 1.7 }}>
                  {product.purpose}
                </Typography>
                <Stack spacing={1}>
                  <Button
                    component={Link}
                    href={`/products/${product.slug}`}
                    endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                    sx={{ color: 'products.main', fontWeight: 700, px: 0, alignSelf: 'flex-start' }}
                  >
                    Product details
                  </Button>
                  {product.href ? (
                    <Button
                      component="a"
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<Launch sx={{ fontSize: 16 }} />}
                      sx={{ color: 'text.secondary', fontWeight: 600, px: 0, alignSelf: 'flex-start' }}
                    >
                      {product.ctaLabel}
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      href={product.ctaHref}
                      sx={{ color: 'text.secondary', fontWeight: 600, px: 0, alignSelf: 'flex-start' }}
                    >
                      {product.ctaLabel}
                    </Button>
                  )}
                </Stack>
              </Box>
            ))}
          </Box>

          <Button component={Link} href="/products" variant="outlined" endIcon={<ArrowForward />}>
            View all products
          </Button>
        </Container>
      </Box>
    </>
  );
}
