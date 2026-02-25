'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  alpha,
} from '@mui/material';
import { FormatQuote } from '@mui/icons-material';

const testimonials = [
  {
    quote: 'ZeeShad delivered a robust software solution that streamlined our operations. Their technical expertise and commitment to quality were outstanding.',
    author: 'Enterprise Client',
    role: 'Operations Director',
  },
  {
    quote: 'From cloud migration to ongoing support, the team has been professional and responsive. We consider them an extension of our IT department.',
    author: 'Tech Startup',
    role: 'CTO',
  },
  {
    quote: 'The Z-ERP implementation was seamless. ZeeShad understood our business needs and delivered a solution that exceeded our expectations.',
    author: 'Retail Partner',
    role: 'Managing Director',
  },
];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
        borderTop: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
      }}
    >
      <Container maxWidth="lg">
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
          Testimonials
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            color: 'text.primary',
          }}
        >
          What our client partners say
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {testimonials.map((item, index) => (
            <Card
              key={index}
              sx={{
                height: '100%',
                bgcolor: alpha(theme.palette.background.default, 0.6),
                border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <FormatQuote
                  sx={{
                    fontSize: 40,
                    color: 'primary.main',
                    opacity: 0.6,
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    lineHeight: 1.8,
                    mb: 2,
                  }}
                >
                  {item.quote}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  {item.author}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
