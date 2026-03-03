'use client';

import { useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  useTheme,
  alpha,
} from '@mui/material';
import { Folder } from '@mui/icons-material';
import { fetchCaseStudiesRequest, setFilter } from '@/store/slices/caseStudiesSlice';
import type { CaseStudyCategory } from '@/store/slices/caseStudiesSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

const FILTERS: { value: CaseStudyCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'erp', label: 'ERP' },
  { value: 'saas', label: 'SaaS' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'automation', label: 'Automation' },
];

export default function CaseStudies() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { items, filter, isLoading, error } = useAppSelector((state) => state.caseStudies);
  const filtered = filter === 'all' ? items : items.filter((i) => i.category === filter);

  useEffect(() => {
    dispatch(fetchCaseStudiesRequest());
  }, [dispatch]);

  return (
    <Box
      component="section"
      id="case-studies"
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        bgcolor: 'background.paper',
        borderTop: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
      }}
    >
      <Container maxWidth="xl">
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
          Case studies
        </Typography>
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 }, maxWidth: 700, mx: 'auto' }}>
          <Typography variant="h2" component="h2" sx={{ mb: 2, fontWeight: 700, color: 'text.primary' }}>
            Work we&apos;re proud of
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
            Real projects across ERP, SaaS, e-commerce, and business automation.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 4 }}>
          {FILTERS.map((f) => (
            <Chip
              key={f.value}
              label={f.label}
              onClick={() => dispatch(setFilter(f.value))}
              variant={filter === f.value ? 'filled' : 'outlined'}
              color={filter === f.value ? 'primary' : 'default'}
              sx={{
                borderColor: filter === f.value ? 'primary.main' : alpha(theme.palette.common.white, 0.2),
                color: filter === f.value ? 'primary.contrastText' : 'text.secondary',
              }}
            />
          ))}
        </Box>

        {error && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((study) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={study.id}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'background.default',
                    border: `1px solid ${alpha(theme.palette.common.white, 0.06)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.3)}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Folder sx={{ color: 'primary.main', fontSize: 28 }} />
                      <Typography variant="overline" sx={{ color: 'text.secondary', textTransform: 'uppercase' }}>
                        {study.category}
                      </Typography>
                    </Box>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                      {study.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 2 }}>
                      {study.description}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}>
                      {study.client} · {study.year}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {study.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontSize: '0.75rem' }} />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
