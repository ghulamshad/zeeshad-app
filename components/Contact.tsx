'use client';

import { useState, useCallback } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Business,
  WhatsApp,
} from '@mui/icons-material';
import Link from 'next/link';
import { submitLeadRequest, setField } from '@/store/slices/contactSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { ContactFormState } from '@/store/slices/contactSlice';
import { validateEmail } from '@/lib/utils';
import { Reveal } from '@/components/Motion';
import { SERVICE_SELECT_OPTIONS } from '@/lib/content/services';

const WHATSAPP_URL = 'https://wa.me/923040058323';

export default function Contact() {
  const dispatch = useAppDispatch();
  const { form, isSubmitting, submitStatus, error } = useAppSelector((state) => state.contact);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      if (name in form) {
        dispatch(setField({ field: name as keyof ContactFormState, value }));
        setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [dispatch, form]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<Record<keyof ContactFormState, string>> = {};
    if (!form.name?.trim()) errors.name = 'Name is required';
    if (!form.email?.trim()) errors.email = 'Email is required';
    else if (!validateEmail(form.email)) errors.email = 'Enter a valid email address';
    if (!form.message?.trim()) errors.message = 'Message is required';
    if (!privacyAccepted) setPrivacyError(true);
    else setPrivacyError(false);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0 || !privacyAccepted) return;
    dispatch(submitLeadRequest(form));
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 9, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Contact
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1.5 }}>
              Get in touch
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Tell us whether you need Business Solutions, Digital Marketing, Consultancy—or a mix.
              We reply with a written scope outline and estimate within two business days (PKT).
            </Typography>
          </Box>
        </Reveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.9fr 1.1fr' },
            gap: { xs: 5, lg: 8 },
            alignItems: 'start',
          }}
        >
          <Reveal>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <LocationOn sx={{ color: 'primary.main', mt: 0.25 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Registered office</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                    D-17 Ground Floor, Gulistan Society
                    <br />
                    Quaidabad, Karachi, Pakistan
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Email sx={{ color: 'primary.main', mt: 0.25 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Email</Typography>
                  <MuiLink href="mailto:info@zeeshad.com" sx={{ color: 'primary.dark' }}>
                    info@zeeshad.com
                  </MuiLink>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Phone sx={{ color: 'primary.main', mt: 0.25 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Phone</Typography>
                  <MuiLink href="tel:+923040058323" sx={{ color: 'primary.dark' }}>
                    +92 304 0058323
                  </MuiLink>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <WhatsApp sx={{ color: 'primary.main', mt: 0.25 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, mb: 0.5 }}>WhatsApp</Typography>
                  <MuiLink
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'primary.dark' }}
                  >
                    Message on WhatsApp
                  </MuiLink>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Business sx={{ color: 'primary.main', mt: 0.25 }} />
                <Box>
                  <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Business hours</Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
                    Mon–Fri: 09:00–18:00 Pakistan Standard Time (PKT, UTC+5)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Reveal>

          <Reveal delay={0.08}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2.5 }}>
                  <TextField
                    fullWidth
                    required
                    label="Full name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={Boolean(fieldErrors.name)}
                    helperText={fieldErrors.name}
                  />
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={Boolean(fieldErrors.email)}
                    helperText={fieldErrors.email}
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2.5 }}>
                  <TextField
                    fullWidth
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    type="tel"
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Box>
                <TextField
                  fullWidth
                  select
                  required
                  label="Service of interest"
                  name="service"
                  value={form.service || ''}
                  onChange={handleChange}
                  SelectProps={{
                    displayEmpty: true,
                    renderValue: (selected) => {
                      if (!selected) {
                        return <em style={{ opacity: 0.65 }}>Select a service</em>;
                      }
                      return String(selected);
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    <em>Select a service</em>
                  </MenuItem>
                      {SERVICE_SELECT_OPTIONS.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={5}
                  label="Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you need built? Industry, rough size and timeline help."
                  error={Boolean(fieldErrors.message)}
                  helperText={fieldErrors.message}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={privacyAccepted}
                      onChange={(e) => {
                        setPrivacyAccepted(e.target.checked);
                        if (e.target.checked) setPrivacyError(false);
                      }}
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      I agree to the processing of my details as described in the{' '}
                      <MuiLink component={Link} href="/privacy" underline="hover" color="primary">
                        Privacy Policy
                      </MuiLink>
                      .
                    </Typography>
                  }
                />
                {privacyError && (
                  <Typography variant="caption" color="error">
                    Please accept the privacy policy to continue.
                  </Typography>
                )}
                {submitStatus === 'success' && (
                  <Alert severity="success" role="status" aria-live="polite">
                    Thanks—we received your message. Expect a written scope outline and estimate
                    within two business days.
                  </Alert>
                )}
                {submitStatus === 'error' && (
                  <Alert severity="error" role="alert" aria-live="assertive">
                    {error || 'Something went wrong. Please try again or email info@zeeshad.com.'}
                  </Alert>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                  endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
                  sx={{ py: 1.5, mt: 0.5 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}
