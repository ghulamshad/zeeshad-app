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
import { SERVICE_SELECT_OPTIONS } from '@/lib/content/solutions';
import { COMPANY } from '@/lib/content/site';
import { CALENDLY_URL, CONTACT_PAGE } from '@/lib/content/marketing';

type ContactProps = {
  /** When true, render the form card only (no contact-info column or page chrome) */
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
    if (!form.company?.trim()) errors.company = 'Company is required';
    if (!form.service?.trim()) errors.service = 'Select what you need handled';
    if (!privacyAccepted) setPrivacyError(true);
    else setPrivacyError(false);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0 || !privacyAccepted) return;
    dispatch(
      submitLeadRequest({
        ...form,
        website: honeypot,
        privacyAccepted: true,
      })
    );
  };

  const contactDetails = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <LocationOn sx={{ color: 'primary.main', mt: 0.25 }} />
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Home base</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>
            Karachi, Pakistan. Remote-first, serving US clients.
          </Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.65, mt: 1 }}>
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
          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>Hours</Typography>
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }}>{COMPANY.hours}</Typography>
        </Box>
      </Box>
    </Box>
  );

  const formPanel = (
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
        width: '100%',
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
            label="Email"
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
            required
            label="Company"
            name="company"
            value={form.company}
            onChange={handleChange}
            error={Boolean(fieldErrors.company)}
            helperText={fieldErrors.company}
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
          label="What do you need handled?"
          name="service"
          value={form.service || ''}
          onChange={handleChange}
          error={Boolean(fieldErrors.service)}
          helperText={fieldErrors.service}
          SelectProps={{
            displayEmpty: true,
            renderValue: (selected) => {
              if (!selected) {
                return <em style={{ opacity: 0.65 }}>Select an option</em>;
              }
              return String(selected);
            },
          }}
        >
          <MenuItem value="" disabled>
            <em>Select an option</em>
          </MenuItem>
          {SERVICE_SELECT_OPTIONS.map((opt) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          multiline
          rows={5}
          label="Tell us about the business and the number that needs to move"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Optional — industry, what you have tried, and the number that needs to move."
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
            {CONTACT_PAGE.thankYouTitle} An account lead reads your message the same business day.
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
          {isSubmitting ? 'Sending...' : CONTACT_PAGE.submitLabel}
        </Button>
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          {CONTACT_PAGE.formNote}{' '}
          <MuiLink href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Pick a time
          </MuiLink>
          .
        </Typography>
      </Box>
    </Box>
  );

  if (embedded) {
    return formPanel;
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
        <Box sx={{ mb: { xs: 5, md: 7 }, maxWidth: 640 }}>
          <Typography variant="overline" sx={{ color: 'primary.main', mb: 1.5, display: 'block' }}>
            Contact
          </Typography>
          <Typography variant="h2" component="h2" sx={{ mb: 1.5 }}>
            {CONTACT_PAGE.hero}
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
            {CONTACT_PAGE.body}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '0.9fr 1.1fr' },
            gap: { xs: 5, lg: 8 },
            alignItems: 'start',
          }}
        >
          {contactDetails}
          {formPanel}
        </Box>
      </Container>
    </Box>
  );
}
