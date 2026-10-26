/** ZeeShad theme tokens — blue = brand primary, orange = contrast/hover accent */

export const WS = {
  orange: '#FF5900', // contrast accent (hovers, eyebrows, CTAs on hover)
  cyan: '#2457F5', // brand primary (matches logo)
  numBlue: '#2457F5',
  ink: '#333333',
  slate: '#5A5A5A',
  dark: '#001024',
  darkAlt: '#070C16',
  white: '#FFFFFF',
  mist: '#F4F8FF',
  circle: 'rgba(36, 87, 245, 0.1)',
  fontDisplay: 'var(--font-inter-tight), "Inter Tight", sans-serif',
  fontBody: 'var(--font-poppins), Poppins, sans-serif',
} as const;

export const wsToptitleSx = {
  display: 'inline-block',
  fontFamily: WS.fontBody,
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: 1.2,
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
  color: WS.orange,
  mb: '10px',
};

export const wsH2Sx = {
  fontFamily: WS.fontDisplay,
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '50px' },
  lineHeight: { xs: 1.15, md: '52.5px' },
  letterSpacing: '-0.5px',
  textTransform: 'capitalize' as const,
  color: WS.ink,
  m: 0,
};

export const wsH2LightSx = {
  ...wsH2Sx,
  color: WS.white,
};

export const wsBodySx = {
  fontFamily: WS.fontBody,
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: WS.slate,
  m: 0,
};

export const wsCommonBtnSx = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: WS.fontBody,
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: 1,
  textTransform: 'capitalize' as const,
  color: WS.white,
  bgcolor: WS.cyan,
  px: '28px',
  py: '22px',
  minWidth: 223,
  borderRadius: '100px',
  boxShadow: 'none',
  gap: '14px',
  textDecoration: 'none',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    bgcolor: WS.orange,
    color: WS.white,
    boxShadow: 'none',
    '& img': { transform: 'rotate(45deg)' },
  },
  '& img': {
    width: 12,
    height: 12,
    filter: 'brightness(0) invert(1)',
    transition: 'transform 0.3s ease',
  },
};
