'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    ink: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    ink?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0A6B68',
      dark: '#085552',
      light: '#1A8A86',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1A2B3C',
      dark: '#0E1A24',
      light: '#2E455C',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#C4A35A',
      dark: '#A8863F',
      light: '#D4B97A',
      contrastText: '#0E1A24',
    },
    ink: {
      main: '#0E1A24',
      dark: '#070D12',
      light: '#243447',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F3F5F7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0E1A24',
      secondary: '#5A6A7A',
    },
    divider: 'rgba(14, 26, 36, 0.08)',
    grey: {
      50: '#F8FAFB',
      100: '#EEF1F4',
      200: '#E2E7EC',
      300: '#C8D0D8',
      400: '#9AA8B5',
      500: '#6B7C8C',
      600: '#4A5B6B',
      700: '#334455',
      800: '#1A2B3C',
      900: '#0E1A24',
    },
  },
  typography: {
    fontFamily: [
      'var(--font-manrope)',
      'Manrope',
      'Segoe UI',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'var(--font-syne), Syne, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: 'var(--font-syne), Syne, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(1.85rem, 4vw, 3rem)',
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: 'var(--font-syne), Syne, sans-serif',
      fontWeight: 650,
      fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
      lineHeight: 1.25,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: 'var(--font-syne), Syne, sans-serif',
      fontWeight: 650,
      fontSize: '1.35rem',
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: 'var(--font-syne), Syne, sans-serif',
      fontWeight: 600,
      fontSize: '1.15rem',
      lineHeight: 1.35,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.45,
    },
    overline: {
      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.14em',
      fontSize: '0.72rem',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1.05rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.925rem',
      lineHeight: 1.65,
    },
    button: {
      textTransform: 'none',
      fontWeight: 650,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 22px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        contained: {
          '&:hover': {
            boxShadow: 'none',
            filter: 'brightness(1.05)',
          },
        },
        outlined: {
          borderWidth: 1.5,
          '&:hover': { borderWidth: 1.5 },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid rgba(14, 26, 36, 0.08)',
          boxShadow: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(10, 107, 104, 0.45)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
              borderColor: '#0A6B68',
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F3F5F7',
          color: '#0E1A24',
        },
      },
    },
  },
});

export default theme;
