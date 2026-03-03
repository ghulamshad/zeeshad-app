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
} from '@mui/icons-material';
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
];

export default function Contact() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { form, isSubmitting, submitStatus, error } = useAppSelector((state) => state.contact);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});

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
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
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
            Get in <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box>
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
            Ready to build? Tell us about your project and we&apos;ll get back within 48 hours.
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
                <Typography variant="h5" component="h3" sx={{ mb: 4, fontWeight: 700, color: 'text.primary' }}>
                  Contact information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                        borderRadius: 2,
                        p: 1.5,
                        minWidth: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                      }}
                    >
                      <LocationOn />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
                        Registered office
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        D-17 Ground Floor, Gulistan Society Quaidabad, Karachi, Pakistan
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                        borderRadius: 2,
                        p: 1.5,
                        minWidth: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                      }}
                    >
                      <Email />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
                        Email
                      </Typography>
                      <Typography
                        component="a"
                        href="mailto:info@zeeshad.com"
                        variant="body2"
                        sx={{ color: 'primary.light', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        info@zeeshad.com
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                        borderRadius: 2,
                        p: 1.5,
                        minWidth: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                      }}
                    >
                      <Phone />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
                        Phone
                      </Typography>
                      <Typography
                        component="a"
                        href="tel:+923040058323"
                        variant="body2"
                        sx={{ color: 'primary.light', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        +92 304 0058323
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                        borderRadius: 2,
                        p: 1.5,
                        minWidth: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.main',
                      }}
                    >
                      <Business />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
                        Business hours
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        Mon–Fri: 9:00 AM – 6:00 PM · Sat: 10:00 AM – 2:00 PM
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
                <form onSubmit={handleSubmit}>
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
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
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
                          placeholder="Your company"
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
                          placeholder="+92 304 0058323"
                          InputProps={{ startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} /> }}
                        />
                      </Box>
                    </Box>
                    <TextField
                      fullWidth
                      select
                      label="Service of interest"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      SelectProps={{ displayEmpty: true }}
                    >
                      <MenuItem value=""><em>Select a service</em></MenuItem>
                      {SERVICE_OPTIONS.map((opt) => (
                        <MenuItem key={opt} value={opt}>{opt}</MenuItem>
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
                      placeholder="Tell us about your project..."
                      error={Boolean(fieldErrors.message)}
                      helperText={fieldErrors.message}
                      InputProps={{
                        startAdornment: <Message sx={{ mr: 1, color: 'text.secondary', mb: 'auto', mt: 1 }} />,
                      }}
                    />
                    {submitStatus === 'success' && (
                      <Alert severity="success" role="status" aria-live="polite">
                        Thanks! Your message was sent. We&apos;ll get back to you soon.
                      </Alert>
                    )}
                    {submitStatus === 'error' && (
                      <Alert severity="error" role="alert" aria-live="assertive">
                        {error || 'Something went wrong. Please try again.'}
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
