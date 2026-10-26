'use client';

import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import SiteChrome from '@/components/SiteChrome';
import MarketingClosing from '@/components/pages/MarketingClosing';
import {
  SCOPING_CTA,
  SERVICE_TIERS,
  ONE_CHANNEL_PAGE,
  COMBINED_PAGE,
  FULL_HANDOFF_PAGE,
} from '@/lib/content/marketing';

const cardSx = {
  p: 3,
  borderRadius: 3,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
} as const;

type Tier = (typeof SERVICE_TIERS)[number];

type ServiceTierContentProps = {
  tier: Tier;
};

export default function ServiceTierContent({ tier }: ServiceTierContentProps) {
  return (
    <SiteChrome>
      <Box component="main" id="main-content" sx={{ bgcolor: 'background.default' }}>
        <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
          <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              {tier.title}
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
              {tier.hero}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 640, mb: 2, lineHeight: 1.75 }}>
              {tier.heroBody}
            </Typography>
            <Typography sx={{ fontWeight: 600, mb: 3 }}>{tier.fee}</Typography>
            <Button component={Link} href={SCOPING_CTA.href} variant="contained" endIcon={<ArrowForward />}>
              {SCOPING_CTA.label}
            </Button>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          {tier.slug === 'one-channel' ? <OneChannelSections /> : null}
          {tier.slug === 'combined-channels' ? <CombinedSections /> : null}
          {tier.slug === 'full-handoff' ? <FullHandoffSections /> : null}

          <Button
            component={Link}
            href={SCOPING_CTA.href}
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{ mt: 2 }}
          >
            {SCOPING_CTA.label}
          </Button>
        </Container>

        <MarketingClosing />
      </Box>
    </SiteChrome>
  );
}

function OneChannelSections() {
  const page = ONE_CHANNEL_PAGE;
  return (
    <>
      <Box sx={{ mb: 5, maxWidth: 720 }}>
        <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
          {page.whyTitle}
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>{page.whyBody}</Typography>
      </Box>

      <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
        Channels
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          mb: 5,
        }}
      >
        {page.channels.map((ch) => (
          <Box key={ch.title} sx={cardSx}>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{ch.title}</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{ch.body}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ ...cardSx, mb: 3 }}>
        <Typography sx={{ fontWeight: 700, mb: 1.5 }}>Cost</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{page.cost}</Typography>
      </Box>
      <Box sx={{ ...cardSx, mb: 5 }}>
        <Typography sx={{ fontWeight: 700, mb: 1.5 }}>Proof</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{page.proof}</Typography>
      </Box>
    </>
  );
}

function CombinedSections() {
  const page = COMBINED_PAGE;
  return (
    <>
      <Box sx={{ mb: 5, maxWidth: 720 }}>
        <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
          {page.whyTitle}
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>{page.whyBody}</Typography>
      </Box>

      <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
        Common combinations
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          mb: 5,
        }}
      >
        {page.combos.map((combo) => (
          <Box key={combo.title} sx={cardSx}>
            <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{combo.title}</Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{combo.body}</Typography>
          </Box>
        ))}
      </Box>

      <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
        What you receive
      </Typography>
      <Box
        component="ul"
        sx={{
          m: 0,
          mb: 5,
          pl: 0,
          listStyle: 'none',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {page.receive.map((item) => (
          <Box component="li" key={item} sx={{ ...cardSx, p: 2.5, borderRadius: 2 }}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ ...cardSx, mb: 3 }}>
        <Typography sx={{ fontWeight: 700, mb: 1.5 }}>Cost</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{page.cost}</Typography>
      </Box>
      <Box sx={{ ...cardSx, mb: 5 }}>
        <Typography sx={{ fontWeight: 700, mb: 1.5 }}>Proof</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{page.proof}</Typography>
      </Box>
    </>
  );
}

function FullHandoffSections() {
  const page = FULL_HANDOFF_PAGE;
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
          {page.whoForTitle}
        </Typography>
        <Box
          component="ul"
          sx={{
            m: 0,
            pl: 0,
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 2,
          }}
        >
          {page.whoFor.map((item) => (
            <Box component="li" key={item} sx={{ ...cardSx, p: 2.5, borderRadius: 2 }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 5, maxWidth: 720 }}>
        <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
          {page.changesTitle}
        </Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>{page.changesBody}</Typography>
      </Box>

      <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
        What you receive
      </Typography>
      <Box
        component="ul"
        sx={{
          m: 0,
          mb: 5,
          pl: 0,
          listStyle: 'none',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {page.receive.map((item) => (
          <Box component="li" key={item} sx={{ ...cardSx, p: 2.5, borderRadius: 2 }}>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{item}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ ...cardSx, mb: 5 }}>
        <Typography sx={{ fontWeight: 700, mb: 1.5 }}>Cost</Typography>
        <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{page.cost}</Typography>
      </Box>

      <Typography variant="h2" component="h2" sx={{ fontSize: '1.35rem', mb: 2 }}>
        Compared
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 5,
        }}
      >
        {page.compare.map((row) => (
          <Box key={row.label} sx={cardSx}>
            <Typography sx={{ fontWeight: 700, mb: 2 }}>{row.label}</Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
              <Box component="strong" sx={{ color: 'text.primary' }}>
                Monthly:{' '}
              </Box>
              {row.monthly}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
              <Box component="strong" sx={{ color: 'text.primary' }}>
                Who:{' '}
              </Box>
              {row.who}
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1, lineHeight: 1.65 }}>
              <Box component="strong" sx={{ color: 'text.primary' }}>
                You see:{' '}
              </Box>
              {row.see}
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
              <Box component="strong" sx={{ color: 'text.primary' }}>
                Ends:{' '}
              </Box>
              {row.ends}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
