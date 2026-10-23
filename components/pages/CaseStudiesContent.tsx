'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import { CASE_STUDIES_INTRO, DELIVERY_STEPS, HOW_WE_WORK } from '@/lib/content/site';
import { PUBLISHED_CASE_STUDIES } from '@/lib/content/caseStudies';

export default function CaseStudiesContent() {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Delivery
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.75rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                mb: 2,
                maxWidth: 720,
              }}
            >
              {CASE_STUDIES_INTRO.headline}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 640, lineHeight: 1.7 }}>
              {CASE_STUDIES_INTRO.body}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: '1.5rem' }}>
            Published case studies
          </Typography>
          {PUBLISHED_CASE_STUDIES.length === 0 ? (
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                mb: 6,
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 1 }}>None published yet</Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                Approved client case studies will appear here when clients permit publication. We do
                not invent names, logos, quotes, or results. Until then, use the delivery approach
                below to evaluate how we work.
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 2.5,
                mb: 6,
              }}
            >
              {PUBLISHED_CASE_STUDIES.map((study) => (
                <Box
                  key={study.slug}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="overline" sx={{ color: 'primary.main', mb: 1, display: 'block' }}>
                    {study.industry}
                  </Typography>
                  <Typography variant="h3" component="h3" sx={{ fontSize: '1.25rem', mb: 1 }}>
                    {study.clientLabel}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.65 }}>
                    {study.problem}
                  </Typography>
                  <Button
                    component={Link}
                    href={`/case-studies/${study.slug}`}
                    endIcon={<ArrowForward />}
                    sx={{ px: 0, fontWeight: 700 }}
                  >
                    Read case study
                  </Button>
                </Box>
              ))}
            </Box>
          )}

          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: '1.5rem' }}>
            How we work
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 2,
              mb: 6,
            }}
          >
            {HOW_WE_WORK.map((item) => (
              <Box
                key={item.title}
                sx={{
                  p: 3,
                  borderRadius: 2.5,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item.line}</Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h2" component="h2" sx={{ mb: 3, fontSize: '1.5rem' }}>
            Delivery process
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 2,
              mb: 6,
            }}
          >
            {DELIVERY_STEPS.map((step, i) => (
              <Box
                key={step.title}
                sx={{
                  p: 2.5,
                  borderRadius: 2.5,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography sx={{ color: 'primary.main', fontWeight: 800, mb: 1, fontSize: '0.8rem' }}>
                  0{i + 1}
                </Typography>
                <Typography sx={{ fontWeight: 700, mb: 0.75 }}>{step.title}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {step.line}
                </Typography>
              </Box>
            ))}
          </Box>

          <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForward />}>
            Discuss Your Project
          </Button>
        </Container>
      </Box>
    </SiteChrome>
  );
}
