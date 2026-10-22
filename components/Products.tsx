'use client';

import { Container, Box, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { ArrowForward, Launch } from '@mui/icons-material';
import { Reveal, Stagger, StaggerItem } from '@/components/Motion';
import { MARKETING_TEASER } from '@/lib/content/solutions';

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
                href="#contact"
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  bgcolor: 'marketing.main',
                  '&:hover': { bgcolor: 'marketing.dark' },
                }}
              >
                {MARKETING_TEASER.cta}
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

          <Box
            sx={{
              mt: 5,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
              gap: 2,
            }}
          >
            {[
              { step: '01 Attract', line: 'Ads and search bring the right buyers' },
              { step: '02 Convert', line: 'Landing pages turn visits into enquiries' },
              { step: '03 Grow', line: 'Nurture and CRO turn enquiries into revenue' },
            ].map((row) => (
              <Box
                key={row.step}
                sx={{
                  p: 2.5,
                  borderRadius: 2.5,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography sx={{ fontWeight: 800, color: 'marketing.main', mb: 0.75, fontSize: '0.85rem' }}>
                  {row.step}
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.925rem' }}>{row.line}</Typography>
              </Box>
            ))}
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
            <Typography variant="h2" component="h2" sx={{ mb: 1.5, maxWidth: 560 }}>
              One live product. Frameworks we use on client builds.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 4, maxWidth: 500 }}>
              Labelled honestly so you know what is a public product versus an internal delivery
              framework.
            </Typography>
          </Reveal>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 2.5,
            }}
          >
            {[
              {
                name: 'Qr-Codify',
                badge: 'Live product',
                description:
                  'QR code generation and management for brands that need dynamic codes, branding and tracking.',
                href: 'https://qr-codify.com',
                cta: 'Learn more about Qr-Codify',
              },
              {
                name: 'Z-ERP framework',
                badge: 'Delivery framework',
                description:
                  'Internal ERP delivery framework for finance, inventory, HR and reporting modules—assembled to fit. Not a public SaaS product.',
                href: '#contact',
                cta: 'Ask about an ERP build',
              },
              {
                name: 'Z-POS framework',
                badge: 'Delivery framework',
                description:
                  'POS-oriented framework adapted for retail and hospitality projects when counter sales need inventory tied in.',
                href: '#contact',
                cta: 'Ask about a POS build',
              },
            ].map((product) => (
              <Box
                key={product.name}
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
                <Typography
                  variant="overline"
                  sx={{ color: 'products.main', mb: 1, display: 'block' }}
                >
                  {product.badge}
                </Typography>
                <Typography variant="h3" component="h3" sx={{ mb: 1.25, fontSize: '1.2rem' }}>
                  {product.name}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 3, flexGrow: 1, lineHeight: 1.7 }}>
                  {product.description}
                </Typography>
                <Stack>
                  {product.href.startsWith('http') ? (
                    <Button
                      component="a"
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<Launch sx={{ fontSize: 16 }} />}
                      sx={{ color: 'products.main', fontWeight: 700, px: 0, alignSelf: 'flex-start' }}
                    >
                      {product.cta}
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      href={product.href}
                      endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                      sx={{ color: 'products.main', fontWeight: 700, px: 0, alignSelf: 'flex-start' }}
                    >
                      {product.cta}
                    </Button>
                  )}
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
