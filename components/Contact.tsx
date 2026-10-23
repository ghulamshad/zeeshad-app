'use client';

import { useState, useCallback, useEffect } from 'react';
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
import { useSearchParams } from 'next/navigation';
import { submitLeadRequest, setField } from '@/store/slices/contactSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { ContactFormState } from '@/store/slices/contactSlice';
import { validateEmail } from '@/lib/utils';
import { Reveal } from '@/components/Motion';
import { SERVICE_SELECT_OPTIONS } from '@/lib/content/solutions';
import { COMPANY } from '@/lib/content/site';

type ContactProps = {
  /** When true, omit outer section chrome for embedding in /contact page */
  embedded?: boolean;
};

export default function Contact({ embedded = false }: ContactProps) {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const { form, isSubmitting, submitStatus, error } = useAppSelector((state) => state.contact);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    const interest = searchParams.get('interest');
    if (interest && !form.service) {
      const match = SERVICE_SELECT_OPTIONS.find(
        (opt) => opt.toLowerCase() === interest.toLowerCase() || opt === interest
      );
      if (match) {
        dispatch(setField({ field: 'service', value: match }));
      }
    }
  }, [searchParams, dispatch, form.service]);

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
    if (honeypot) return;

    const errors: Partial<Record<keyof ContactFormState, string>> = {};
    if (!form.name?.trim()) errors.name = 'Name is required';
    if (!form.email?.trim()) errors.email = 'Email is required';
    else if (!validateEmail(form.email)) errors.email = 'Enter a valid email address';
    if (!form.service?.trim()) errors.service = 'Select a service of interest';
    if (!form.message?.trim()) errors.message = 'Message is required';
    if (!privacyAccepted) setPrivacyError(true);
    else setPrivacyError(false);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0 || !privacyAccepted) return;
    dispatch(submitLeadRequest(form));
  };

  const formBody = (
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
                {COMPANY.addressLines.map((line) => (
                  <Box component="span" key={line} sx={{ display: 'block' }}>
                    {line}
                  </Box>
                ))}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Email sx={{ color: 'primary.main', mt: 0.25 }} />
            <Box>
              <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Email</Typography>
              <MuiLink href={`mailto:${COMPANY.email}`} sx={{ color: 'primary.dark' }}>
                {COMPANY.email}
              </MuiLink>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Phone sx={{ color: 'primary.main', mt: 0.25 }} />
            <Box>
              <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Phone</Typography>
              <MuiLink href={`tel:${COMPANY.phoneTel}`} sx={{ color: 'primary.dark' }}>
                {COMPANY.phoneDisplay}
              </MuiLink>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <WhatsApp sx={{ color: 'primary.main', mt: 0.25 }} />
            <Box>
              <Typography sx={{ fontWeight: 700, mb: 0.5 }}>WhatsApp</Typography>
              <MuiLink
                href={COMPANY.whatsappUrl}
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
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{COMPANY.hours}</Typography>
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
            position: 'relative',
            p: { xs: 3, md: 4 },
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                left: '-10000px',
                width: 1,
                height: 1,
                overflow: 'hidden',
              }}
            >
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </Box>
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
                autoComplete="name"
              />
              <TextField
                fullWidth
                required
                type="email"
                label="Business email"
                name="email"
                value={form.email}
                onChange={handleChange}
                error={Boolean(fieldErrors.email)}
                helperText={fieldErrors.email}
                autoComplete="email"
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2.5 }}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                value={form.company}
                onChange={handleChange}
                autoComplete="organization"
              />
              <TextField
                fullWidth
                type="tel"
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
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
              error={Boolean(fieldErrors.service)}
              helperText={fieldErrors.service}
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
              label="Brief project requirement"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you need built or discussed? Industry, rough size and timeline help."
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
              <Typography variant="caption" color="error" role="alert">
                Please accept the privacy policy to continue.
              </Typography>
            )}
            {submitStatus === 'success' && (
              <Alert severity="success" role="status" aria-live="polite">
                Thanks—we received your message. We will reply with next steps. For urgent matters,
                email {COMPANY.email} or use WhatsApp.
              </Alert>
            )}
            {submitStatus === 'error' && (
              <Alert severity="error" role="alert" aria-live="assertive">
                {error || `Something went wrong. Please try again or email ${COMPANY.email}.`}
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
              {isSubmitting ? 'Sending...' : 'Discuss Your Project'}
            </Button>
            <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              Prefer email? Write to{' '}
              <MuiLink href={`mailto:${COMPANY.email}`}>{COMPANY.email}</MuiLink>
            </Typography>
          </Box>
        </Box>
      </Reveal>
    </Box>
  );

  if (embedded) {
    return formBody;
  }

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 9, md: 12 },
        bgcolor: 'background.default',
        scrollMarginTop: 96,
      }}
    >
      <Container maxWidth="lg">
        <Reveal>
          <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
              Contact
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 1.5 }}>
              Discuss Your Project
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Share a short brief. We reply with next steps and, where appropriate, a written scope
              outline. NDA first if you want one.
            </Typography>
          </Box>
        </Reveal>
        {formBody}
      </Container>
    </Box>
  );
}
