'use client';

import { useState, useCallback } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Alert,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Business,
  Message,
  Person,
  WhatsApp,
} from '@mui/icons-material';
import Link from 'next/link';
import { submitLeadRequest, setField } from '@/store/slices/contactSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { ContactFormState } from '@/store/slices/contactSlice';
import { validateEmail } from '@/lib/utils';

const SERVICE_OPTIONS = [
  'Custom ERP Solutions',
  'SaaS MVP Builds',
  'E-commerce Systems',
  'Business Automation',
  'Other',
] as const;

const WHATSAPP_URL = 'https://wa.me/923040058323';

export default function Contact() {
  const theme = useTheme();
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
        py: { xs: 8, sm: 10, md: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 }, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
            Get in <Box component="span" sx={{ color: 'primary.main' }}>touch</Box>
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
            Send a short brief. We reply with a written scope outline and estimate within
            two business days (PKT).
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
          <Box sx={{ width: { xs: '100%', lg: '33.333%' } }}>
            <Card
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
              }}
            >
              <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 700 }}>
                  Contact information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <LocationOn sx={{ color: 'primary.main', mt: 0.5 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Registered office
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        D-17 Ground Floor, Gulistan Society Quaidabad, Karachi, Pakistan
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Email sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Email
                      </Typography>
                      <MuiLink href="mailto:info@zeeshad.com" sx={{ color: 'primary.light' }}>
                        info@zeeshad.com
                      </MuiLink>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Phone sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Phone
                      </Typography>
                      <MuiLink href="tel:+923040058323" sx={{ color: 'primary.light' }}>
                        +92 304 0058323
                      </MuiLink>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <WhatsApp sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        WhatsApp
                      </Typography>
                      <MuiLink
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: 'primary.light' }}
                      >
                        Message on WhatsApp
                      </MuiLink>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Business sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Business hours
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        Mon–Fri: 09:00–18:00 Pakistan Standard Time (PKT, UTC+5)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ width: { xs: '100%', lg: '66.666%' } }}>
            <Card sx={{ bgcolor: 'background.paper', border: `1px solid ${alpha(theme.palette.common.white, 0.06)}` }}>
              <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                <form onSubmit={handleSubmit} noValidate>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                        <TextField
                          fullWidth
                          required
                          label="Full name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          error={Boolean(fieldErrors.name)}
                          helperText={fieldErrors.name}
                          InputProps={{ startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} /> }}
                        />
                      </Box>
                      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
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
                          InputProps={{ startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} /> }}
                        />
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                        <TextField
                          fullWidth
                          label="Company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          InputProps={{ startAdornment: <Business sx={{ mr: 1, color: 'text.secondary' }} /> }}
                        />
                      </Box>
                      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                        <TextField
                          fullWidth
                          type="tel"
                          label="Phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          InputProps={{ startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} /> }}
                        />
                      </Box>
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
                            return <em style={{ opacity: 0.7 }}>Select a service</em>;
                          }
                          return String(selected);
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        <em>Select a service</em>
                      </MenuItem>
                      {SERVICE_OPTIONS.map((opt) => (
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
                      InputProps={{
                        startAdornment: (
                          <Message sx={{ mr: 1, color: 'text.secondary', mb: 'auto', mt: 1 }} />
                        ),
                      }}
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
                        Thanks—we received your message. Expect a written scope outline and
                        estimate within two business days.
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
                      endIcon={
                        isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />
                      }
                      sx={{ py: 1.5, fontSize: '1.1rem', borderRadius: 3 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
