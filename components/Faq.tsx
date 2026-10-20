'use client';

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  alpha,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FAQS = [
  {
    q: 'What does ZeeShad build?',
    a: 'Custom ERP systems, SaaS MVPs, e-commerce platforms and business automation. We focus on software delivery for growing businesses that need systems that work together—not a long menu of unrelated IT services.',
  },
  {
    q: 'Who is ZeeShad a good fit for?',
    a: 'Owners and operations leads at SMEs and mid-size companies who need a custom ERP, a first SaaS product, an online store or marketplace, or automation that connects existing tools. If you need a large multi-vendor IT department for hardware, networking and cybersecurity, we are not the right fit.',
  },
  {
    q: 'Where is ZeeShad based and how do you work with remote clients?',
    a: 'We are based in Karachi, Pakistan. We work over email, video calls and messaging, and we aim to overlap with UK afternoons and US Eastern mornings when needed. Hours: Monday–Friday, 09:00–18:00 Pakistan Standard Time (PKT, UTC+5).',
  },
  {
    q: 'How do I start a project with ZeeShad?',
    a: 'Send a short brief via the contact form, email info@zeeshad.com, or WhatsApp. We reply with a written scope outline and estimate within two business days—so you know what we propose before any build starts.',
  },
];

export default function Faq() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
        borderTop: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
      }}
    >
      <Container maxWidth="md">
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
          FAQ
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{ textAlign: 'center', mb: 4, fontWeight: 700, color: 'text.primary' }}
        >
          Straight answers
        </Typography>

        {FAQS.map((item) => (
          <Accordion
            key={item.q}
            disableGutters
            elevation={0}
            sx={{
              mb: 1,
              bgcolor: 'background.default',
              border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
              borderRadius: '12px !important',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
