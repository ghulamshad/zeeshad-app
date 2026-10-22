'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    solutions: Palette['primary'];
    marketing: Palette['primary'];
    products: Palette['primary'];
    ink: Palette['primary'];
  }
  interface PaletteOptions {
    solutions?: PaletteOptions['primary'];
    marketing?: PaletteOptions['primary'];
    products?: PaletteOptions['primary'];
    ink?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2457F5',
      dark: '#1A3FB8',
      light: '#4B74F7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0B1324',
      dark: '#070C16',
      light: '#243044',
      contrastText: '#ffffff',
    },
    solutions: {
      main: '#2457F5',
      dark: '#1A3FB8',
      light: '#EAF0FF',
      contrastText: '#ffffff',
    },
    marketing: {
      main: '#C2410C',
      dark: '#9A3412',
      light: '#FFF1E8',
      contrastText: '#ffffff',
    },
    products: {
      main: '#0F7A4A',
      dark: '#0B5C37',
      light: '#E7F6EE',
      contrastText: '#ffffff',
    },
    ink: {
      main: '#0B1324',
      dark: '#070C16',
      light: '#4B5565',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F7FB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0B1324',
      secondary: '#4B5565',
    },
    divider: '#E3E7EF',
    grey: {
      50: '#F5F7FB',
      100: '#EEF1F6',
      200: '#E3E7EF',
      300: '#CBD2DE',
      400: '#B8C2D3',
      500: '#4B5565',
      600: '#3A4454',
      700: '#243044',
      800: '#0B1324',
      900: '#070C16',
    },
  },
  typography: {
    fontFamily: ['var(--font-inter)', 'Inter', 'Segoe UI', 'sans-serif'].join(','),
    h1: {
      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(1.25rem, 2vw, 1.375rem)',
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      fontWeight: 650,
      fontSize: '1.2rem',
      lineHeight: 1.35,
    },
    h5: {
      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      fontWeight: 650,
      fontSize: '1.05rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.45,
    },
    overline: {
      fontFamily: 'var(--font-inter), Inter, sans-serif',
      fontWeight: 700,
      letterSpacing: '0.12em',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.925rem',
      lineHeight: 1.65,
    },
    subtitle1: {
      fontSize: '1.1875rem',
      lineHeight: 1.55,
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontWeight: 650,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '12px 22px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        contained: {
          '&:hover': { filter: 'brightness(1.04)' },
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
          borderRadius: 16,
          border: '1px solid #E3E7EF',
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
            borderRadius: 12,
            backgroundColor: '#FFFFFF',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(36, 87, 245, 0.45)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
              borderColor: '#2457F5',
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: '100%',
        },
        body: {
          backgroundColor: '#F5F7FB',
          color: '#0B1324',
          width: '100%',
          maxWidth: 'none',
          margin: 0,
        },
        '#main-content, main': {
          width: '100%',
          maxWidth: 'none',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
      styleOverrides: {
        root: {
          width: '100%',
        },
        maxWidthLg: {
          maxWidth: '1200px !important',
        },
        maxWidthXl: {
          maxWidth: '1280px !important',
        },
      },
    },
  },
});

export default theme;
