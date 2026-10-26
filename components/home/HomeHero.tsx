'use client';

import { useEffect, useId, useRef } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { NorthEast, KeyboardArrowDown } from '@mui/icons-material';
import { ASSETS, INSPIRED_HERO } from '@/lib/content/inspiredHome';

const YT_ID = INSPIRED_HERO.youtubeId;
const PLAYBACK_RATE = 1.5;

type YTPlayer = {
  destroy: () => void;
  mute: () => void;
  playVideo: () => void;
  setPlaybackRate: (rate: number) => void;
};

type YTNamespace = {
  Player: new (
    el: string | HTMLElement,
    opts: {
      videoId: string;
      playerVars?: Record<string, number | string>;
      events?: {
        onReady?: (e: { target: YTPlayer }) => void;
        onStateChange?: (e: { data: number; target: YTPlayer }) => void;
      };
    }
  ) => YTPlayer;
  PlayerState: { ENDED: number; PLAYING: number };
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function loadYouTubeApi(): Promise<YTNamespace> {
  if (typeof window === 'undefined') return Promise.reject(new Error('ssr'));
  if (window.YT?.Player) return Promise.resolve(window.YT);

  return new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      if (window.YT) resolve(window.YT);
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
    } else if (window.YT?.Player) {
      resolve(window.YT);
    }
  });
}

export default function HomeHero() {
  const reactId = useId().replace(/:/g, '');
  const playerElId = `zs-hero-yt-${reactId}`;
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadYouTubeApi().then((YT) => {
      if (cancelled) return;
      const mount = document.getElementById(playerElId);
      if (!mount) return;

      playerRef.current = new YT.Player(playerElId, {
        videoId: YT_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          loop: 1,
          playlist: YT_ID,
          showinfo: 0,
          fs: 0,
          iv_load_policy: 3,
          disablekb: 1,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.setPlaybackRate(PLAYBACK_RATE);
            e.target.playVideo();
          },
          onStateChange: (e) => {
            // Keep 1.5x if YouTube resets rate on loop
            if (e.data === YT.PlayerState.PLAYING) {
              e.target.setPlaybackRate(PLAYBACK_RATE);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy();
      } catch {
        /* ignore */
      }
      playerRef.current = null;
    };
  }, [playerElId]);

  return (
    <Box component="section" className="zs-home-hero" sx={{ position: 'relative', bgcolor: '#050A18', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', minHeight: { xs: 'auto', md: 'min(92vh, 900px)' }, overflow: 'hidden' }}>
        {/* Half-screen YouTube (design) */}
        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            inset: { md: 0 },
            width: { xs: '100%', md: '62%' },
            left: { md: 'auto' },
            right: { md: 0 },
            minHeight: { xs: 280, sm: 360, md: '100%' },
            zIndex: 0,
            clipPath: { xs: 'none', md: 'polygon(14% 0, 100% 0, 100% 100%, 0 100%)' },
            overflow: 'hidden',
            bgcolor: '#050A18',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '177.78%', md: '140%' },
              height: { xs: '100%', md: '140%' },
              minWidth: '100%',
              minHeight: '100%',
              pointerEvents: 'none',
              '& iframe': {
                border: 0,
                width: '100%',
                height: '100%',
                display: 'block',
                pointerEvents: 'none',
              },
            }}
          >
            <div id={playerElId} />
          </Box>
        </Box>

        {/* Decorative layers */}
        <Box aria-hidden sx={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', display: { xs: 'none', md: 'block' } }}>
          <Box sx={{ position: 'absolute', inset: 0, backgroundImage: `url(${ASSETS.heroGrid})`, backgroundSize: 'cover', opacity: 0.35, maskImage: 'linear-gradient(90deg,#000 30%,transparent 72%)' }} />
          <Box sx={{ position: 'absolute', left: 0, top: 0, width: '58%', height: '100%', backgroundImage: `url(${ASSETS.heroHalf})`, backgroundSize: 'cover', backgroundPosition: 'left center', opacity: 0.9 }} />
          <Box sx={{ position: 'absolute', left: '35%', top: '10%', width: 420, height: 280, backgroundImage: `url(${ASSETS.heroGlow})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', opacity: 0.55 }} />
          <Box sx={{ position: 'absolute', left: 0, top: 0, right: '40%', height: 70, backgroundImage: `url(${ASSETS.heroTopGrad})`, backgroundSize: 'cover', opacity: 0.8 }} />
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, #050A18 0%, #050A18 40%, rgba(5,10,24,0.88) 52%, rgba(5,10,24,0.35) 68%, transparent 82%)' }} />
        </Box>

        {/* Copy */}
        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            inset: { md: 0 },
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            bgcolor: { xs: '#050A18', md: 'transparent' },
            pt: { xs: 5, md: 0 },
            pb: { xs: 5, md: 0 },
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <Box sx={{ maxWidth: { md: 560 } }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', sm: '2.55rem', md: '3.15rem' },
                  letterSpacing: '-0.035em',
                  lineHeight: 1.08,
                  color: '#fff',
                  mb: 2,
                }}
              >
                {INSPIRED_HERO.h1}{' '}
                <Box component="span" sx={{ color: '#2457F5' }}>
                  {INSPIRED_HERO.h1Accent}
                </Box>
              </Typography>

              <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: { xs: '1rem', md: '1.08rem' }, lineHeight: 1.7, mb: 3.5, maxWidth: 500 }}>
                {INSPIRED_HERO.body}
              </Typography>

              <Button
                component={Link}
                href={INSPIRED_HERO.cta.href}
                variant="contained"
                endIcon={<NorthEast sx={{ fontSize: 16 }} />}
                sx={{
                  px: 3,
                  py: 1.45,
                  borderRadius: 999,
                  fontWeight: 700,
                  textTransform: 'none',
                  bgcolor: '#2457F5',
                  color: '#fff',
                  boxShadow: '0 10px 30px rgba(36,87,245,0.35)',
                  '&:hover': { bgcolor: '#FF5900', boxShadow: '0 12px 34px rgba(255,89,0,0.35)' },
                }}
              >
                {INSPIRED_HERO.cta.label}
              </Button>
            </Box>
          </Container>
        </Box>

        <Box
          aria-hidden
          sx={{
            display: { xs: 'none', md: 'flex' },
            position: 'absolute',
            right: 18,
            top: '50%',
            transform: 'translateY(-50%)',
            writingMode: 'vertical-rl',
            alignItems: 'center',
            gap: 1,
            color: 'rgba(255,255,255,0.75)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            zIndex: 3,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Scroll down
          <KeyboardArrowDown sx={{ fontSize: 18, transform: 'rotate(90deg)' }} />
        </Box>
      </Box>
    </Box>
  );
}
