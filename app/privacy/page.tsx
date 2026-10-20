'use client';

import Link from 'next/link';
import { Container, Box, Typography, Button } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <Box component="main" id="main-content" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, mb: 2 }}>
            Privacy Policy
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
            Last updated: 20 October 2026
          </Typography>

          <Box sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: '1.35rem', fontWeight: 700, color: 'text.primary', mt: 3, mb: 2 }}
            >
              Who we are
            </Typography>
            <Typography sx={{ mb: 2 }}>
              ZeeShad (Private) Limited (&quot;ZeeShad&quot;, &quot;we&quot;, &quot;us&quot;) operates zeeshad.com.
              Registered office: D-17 Ground Floor, Gulistan Society, Quaidabad, Karachi, Pakistan.
              Contact: info@zeeshad.com · +92 304 0058323.
            </Typography>

            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: '1.35rem', fontWeight: 700, color: 'text.primary', mt: 3, mb: 2 }}
            >
              What we collect
            </Typography>
            <Typography sx={{ mb: 2 }}>
              When you use the contact form or email us, we may collect your name, email address,
              company name, phone number, service interest and message content. We do not sell
              personal data.
            </Typography>

            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: '1.35rem', fontWeight: 700, color: 'text.primary', mt: 3, mb: 2 }}
            >
              Why we use it
            </Typography>
            <Typography sx={{ mb: 2 }}>
              We use this information to respond to enquiries, prepare scope outlines and estimates,
              and manage ongoing project communication.
            </Typography>

            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: '1.35rem', fontWeight: 700, color: 'text.primary', mt: 3, mb: 2 }}
            >
              Retention and sharing
            </Typography>
            <Typography sx={{ mb: 2 }}>
              We keep enquiry records only as long as needed for sales follow-up and project records.
              We may use email and hosting providers as processors. We do not share your details for
              unrelated marketing lists.
            </Typography>

            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: '1.35rem', fontWeight: 700, color: 'text.primary', mt: 3, mb: 2 }}
            >
              Your rights
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Depending on where you live, you may have rights to access, correct or delete personal
              data we hold about you. Email info@zeeshad.com to make a request.
            </Typography>

            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: '1.35rem', fontWeight: 700, color: 'text.primary', mt: 3, mb: 2 }}
            >
              International clients
            </Typography>
            <Typography sx={{ mb: 2 }}>
              If you contact us from the UK, EU or elsewhere, your message may be processed in
              Pakistan. By submitting the form you acknowledge this transfer for the purpose of
              responding to your enquiry. For project work we can discuss data-protection terms in
              the contract.
            </Typography>
          </Box>

          <Button component={Link} href="/#contact" variant="contained" sx={{ mt: 4 }}>
            Back to contact
          </Button>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
