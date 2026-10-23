'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowBack, ArrowForward, Launch } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import type { ProductRecord } from '@/lib/content/site';

export default function ProductDetailContent({ product }: { product: ProductRecord }) {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 9 } }}>
          <Button component={Link} href="/products" startIcon={<ArrowBack />} sx={{ mb: 3, px: 0 }}>
            All products
          </Button>
          <Typography variant="overline" sx={{ color: 'products.main', mb: 1.5, display: 'block' }}>
            {product.status}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 800,
              letterSpacing: '-0.03em',
              mb: 2,
            }}
          >
            {product.name}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 3, lineHeight: 1.75 }}>
            {product.purpose}
          </Typography>
          <Typography sx={{ mb: 1, fontWeight: 700 }}>Intended customer</Typography>
          <Typography sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>{product.customer}</Typography>

          <Typography sx={{ mb: 2, fontWeight: 700 }}>Key capabilities</Typography>
          <Box component="ul" sx={{ m: 0, mb: 4, pl: 2.5 }}>
            {product.features.map((f) => (
              <Box component="li" key={f} sx={{ mb: 1, color: 'text.secondary', lineHeight: 1.6 }}>
                {f}
              </Box>
            ))}
          </Box>

          {product.status.includes('framework') && (
            <Box
              sx={{
                p: 2.5,
                mb: 4,
                borderRadius: 2,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.65 }}>
                This is an internal delivery framework used on client engagements. It is not offered as
                a public SaaS subscription.
              </Typography>
            </Box>
          )}

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            {product.href ? (
              <Button
                component="a"
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                endIcon={<Launch />}
              >
                {product.ctaLabel}
              </Button>
            ) : (
              <Button component={Link} href={product.ctaHref} variant="contained" endIcon={<ArrowForward />}>
                {product.ctaLabel}
              </Button>
            )}
            <Button component={Link} href="/contact" variant="outlined">
              Discuss Your Project
            </Button>
          </Stack>
        </Container>
      </Box>
    </SiteChrome>
  );
}
