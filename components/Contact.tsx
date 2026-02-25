'use client';

import { useState } from 'react';
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

const services = [
  'Software Development',
  'Cloud Computing',
  'Artificial Intelligence',
  'Data Analytics',
  'Cybersecurity',
  'Digital Transformation',
  'IT Consultancy',
  'Systems Integration',
  'Hardware Solutions',
  'Mobile Development',
  'IT Training & R&D',
  'Other',
];

export default function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
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
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 }, maxWidth: 800, mx: 'auto' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            Get In <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box>
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
          >
            Ready to transform your business with innovative IT solutions? 
            Let&apos;s discuss how we can help you achieve your goals.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 4 }}>
          {/* Contact Information */}
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
                  Contact Information
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                        borderRadius: 2,
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 48,
                        height: 48,
                        color: 'primary.main',
                      }}
                    >
                      <LocationOn />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
                        Registered Office
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        D-17 Ground Floor<br />
                        Gulistan Society Quaidabad<br />
                        Karachi, Pakistan
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                        borderRadius: 2,
                        p: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 48,
                        height: 48,
                        color: 'primary.main',
                      }}
                    >
                      <Email />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
                        Email Address
                      </Typography>
                      <Typography
                        component="a"
                        href="mailto:info@zeeshad.com"
                        variant="body2"
                        sx={{
                          color: 'primary.light',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' },
                        }}
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
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 48,
                        height: 48,
                        color: 'primary.main',
                      }}
                    >
                      <Phone />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
                        Phone Number
                      </Typography>
                      <Typography
                        component="a"
                        href="tel:+923040058323"
                        variant="body2"
                        sx={{
                          color: 'primary.light',
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' },
                        }}
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
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 48,
                        height: 48,
                        color: 'primary.main',
                      }}
                    >
                      <Business />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
                        Business Hours
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 4,
                    pt: 4,
                    borderTop: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    We&apos;re here to help you with all your IT needs. 
                    Reach out to us and let&apos;s start a conversation about 
                    how we can support your business.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Contact Form */}
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
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        InputProps={{
                          startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />,
                        }}
                      />
                      </Box>

                      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        label="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        InputProps={{
                          startAdornment: <Email sx={{ mr: 1, color: 'text.secondary' }} />,
                        }}
                      />
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                      <TextField
                        fullWidth
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        InputProps={{
                          startAdornment: <Business sx={{ mr: 1, color: 'text.secondary' }} />,
                        }}
                      />
                      </Box>

                      <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                      <TextField
                        fullWidth
                        type="tel"
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 304 0058323"
                        InputProps={{
                          startAdornment: <Phone sx={{ mr: 1, color: 'text.secondary' }} />,
                        }}
                      />
                      </Box>
                    </Box>

                    <Box>
                      <TextField
                        fullWidth
                        select
                        label="Service of Interest"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        SelectProps={{
                          displayEmpty: true,
                        }}
                      >
                        <MenuItem value="">
                          <em>Select a service</em>
                        </MenuItem>
                        {services.map((service) => (
                          <MenuItem key={service} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Box>

                    <Box>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={5}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or requirements..."
                        InputProps={{
                          startAdornment: (
                            <Message sx={{ mr: 1, color: 'text.secondary', mb: 'auto', mt: 1 }} />
                          ),
                        }}
                      />
                    </Box>

                    {submitStatus === 'success' && (
                      <Box>
                        <Alert severity="success">
                          Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                        </Alert>
                      </Box>
                    )}

                    {submitStatus === 'error' && (
                      <Box>
                        <Alert severity="error">
                          Something went wrong. Please try again later.
                        </Alert>
                      </Box>
                    )}

                    <Box>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={isSubmitting}
                        endIcon={
                          isSubmitting ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : (
                            <Send />
                          )
                        }
                        sx={{
                          py: 1.5,
                          fontSize: '1.1rem',
                          borderRadius: 3,
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Box>
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
