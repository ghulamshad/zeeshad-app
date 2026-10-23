'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward, Launch } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import { PRODUCTS } from '@/lib/content/site';

export default function ProductsCatalogueContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'products.main', mb: 1.5, display: 'block' }}>
              Product catalogue
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 2,
                maxWidth: 640,
              }}
            >
              Products and delivery frameworks
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 560, lineHeight: 1.7 }}>
              Only items we can support are listed. Status labels distinguish commercial products from
              internal frameworks used on client builds.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            {PRODUCTS.map((product) => (
              <Box
                key={product.slug}
                sx={{
                  p: { xs: 3, md: 4 },
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
                <Typography variant="h2" component="h2" sx={{ fontSize: '1.45rem', mb: 1.5 }}>
                  {product.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7, flexGrow: 1 }}>
                  {product.purpose}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', mb: 2.5 }}>
                  <Box component="strong" sx={{ color: 'text.primary' }}>
                    For:{' '}
                  </Box>
                  {product.customer}
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
                  <Button
                    component={Link}
                    href={`/products/${product.slug}`}
                    variant="contained"
                    endIcon={<ArrowForward />}
                  >
                    Details
                  </Button>
                  {product.href ? (
                    <Button
                      component="a"
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outlined"
                      endIcon={<Launch />}
                    >
                      {product.ctaLabel}
                    </Button>
                  ) : (
                    <Button component={Link} href={product.ctaHref} variant="outlined">
                      {product.ctaLabel}
                    </Button>
                  )}
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </SiteChrome>
  );
}
