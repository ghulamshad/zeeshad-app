'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Reveal } from '@/components/Motion';

const FAQS = [
  {
    q: 'What services does ZeeShad offer?',
    a: 'Three main lines: Business Solutions (custom ERP, SaaS and product builds, e-commerce, automation and integrations), Digital Marketing (SEO, paid media, social, creative, email/CRM and analytics), and Consultancy (transformation advisory, technology selection, operations, growth advisory, scoping and vendor oversight).',
  },
  {
    q: 'Who is ZeeShad a good fit for?',
    a: 'Owners, marketing leads and operations managers at SMEs and mid-size companies who need better systems, clearer demand generation, or independent advice before a major software or marketing investment. If you only need commodity hardware supply or a large multi-vendor IT department, we are not the right fit.',
  },
  {
    q: 'Can we combine services?',
    a: 'Yes. Many briefs mix lines—for example a Business Solutions build with Digital Marketing launch support, or Consultancy first to define scope before delivery. We will say clearly what belongs in one engagement and what should be sequenced.',
  },
  {
    q: 'Where is ZeeShad based and how do you work with remote clients?',
    a: 'We are based in Karachi, Pakistan. We work over email, video calls and messaging, and we aim to overlap with UK afternoons and US Eastern mornings when needed. Hours: Monday–Friday, 09:00–18:00 Pakistan Standard Time (PKT, UTC+5).',
  },
  {
    q: 'How do I start a project with ZeeShad?',
    a: 'Send a short brief via the contact form, email info@zeeshad.com, or WhatsApp. Include which service line you care about (Business Solutions, Digital Marketing or Consultancy). We reply with a written scope outline and estimate within two business days.',
  },
];

export default function Faq() {
  const [expanded, setExpanded] = useState<string | false>(FAQS[0].q);

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 9, md: 11 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <Reveal>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', mb: 1.5, display: 'block', textAlign: 'center' }}
          >
            FAQ
          </Typography>
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 5 }}>
            Straight answers
          </Typography>
        </Reveal>

        {FAQS.map((item) => (
          <Accordion
            key={item.q}
            disableGutters
            elevation={0}
            expanded={expanded === item.q}
            onChange={(_, isExpanded) => setExpanded(isExpanded ? item.q : false)}
            sx={{
              mb: 1.25,
              bgcolor: 'transparent',
              borderBottom: '1px solid',
              borderColor: 'divider',
              borderRadius: '0 !important',
              '&:before': { display: 'none' },
              '&.Mui-expanded': { margin: 0, mb: 1.25 },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: 'primary.main' }} />}
              sx={{ px: 0, py: 0.5 }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-syne), Syne, sans-serif',
                  fontWeight: 650,
                  fontSize: '1.05rem',
                  color: 'text.primary',
                  pr: 2,
                }}
              >
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 2.5 }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
