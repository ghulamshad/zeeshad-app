'use client';

import { Box } from '@mui/material';

type BrandMarkProps = {
  size?: number;
  invert?: boolean;
};

/** Crisp vector ZS mark for light/dark surfaces */
export default function BrandMark({ size = 44, invert = false }: BrandMarkProps) {
  const blue = invert ? '#9BB6FF' : '#2457F5';
  const ring = invert ? '#E2E6EE' : '#9AA3B5';

  return (
    <Box
      aria-hidden
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2.5,
        bgcolor: invert ? 'rgba(255,255,255,0.08)' : '#EAF0FF',
      }}
    >
      <svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="24"
          y="31"
          textAnchor="middle"
          fontFamily="Manrope, Arial Black, Arial, sans-serif"
          fontWeight="800"
          fontSize="20"
          letterSpacing="-1.2"
          fill={blue}
        >
          ZS
        </text>
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="8.5"
          stroke={ring}
          strokeWidth="2.4"
          transform="rotate(-18 24 24)"
          fill="none"
        />
      </svg>
    </Box>
  );
}
