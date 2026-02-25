'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  alpha,
  IconButton,
} from '@mui/material';
import {
  ArrowBackIos,
  ArrowForwardIos,
  TrendingUp,
  People,
  Business,
} from '@mui/icons-material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  gradient: string[];
  backgroundImage?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

// Enterprise-grade flying text animation component
interface AnimatedTextProps {
  text: string;
  direction: 'left' | 'right' | 'top' | 'bottom' | 'zoom' | 'fade';
  delay?: number;
  className?: string;
  animationType?: 'letter' | 'word';
}

function AnimatedText({ 
  text, 
  direction, 
  delay = 0, 
  className,
  animationType = 'letter'
}: AnimatedTextProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear any existing timeouts
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    
    // Reset visible items in next tick
    const resetTimeout = setTimeout(() => {
      setVisibleItems([]);
    }, 0);
    
    // Start animation after delay
    const startTimeout = setTimeout(() => {
      const items = animationType === 'letter' ? text.split('') : text.split(' ');
      const staggerDelay = animationType === 'letter' ? 30 : 100; // Faster for letters, slower for words
      
      items.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setVisibleItems((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        }, index * staggerDelay);
        timeoutsRef.current.push(timeout);
      });
    }, delay);

    return () => {
      clearTimeout(resetTimeout);
      clearTimeout(startTimeout);
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [text, delay, animationType]);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-100px) translateY(0) scale(0.8)';
      case 'right':
        return 'translateX(100px) translateY(0) scale(0.8)';
      case 'top':
        return 'translateX(0) translateY(-80px) scale(0.8)';
      case 'bottom':
        return 'translateX(0) translateY(80px) scale(0.8)';
      case 'zoom':
        return 'translateX(0) translateY(0) scale(0.3)';
      case 'fade':
        return 'translateX(0) translateY(0) scale(1)';
      default:
        return 'translateX(0) translateY(0) scale(0.8)';
    }
  };

  const getFinalTransform = () => {
    if (direction === 'zoom' || direction === 'fade') {
      return 'translateX(0) translateY(0) scale(1)';
    }
    return 'translateX(0) translateY(0) scale(1)';
  };

  const initialTransform = getInitialTransform();
  const finalTransform = getFinalTransform();

  if (animationType === 'word') {
    const words = text.split(' ');
    return (
      <Box
        component="span"
        className={className}
        sx={{
          display: 'inline-block',
          '& .word': {
            display: 'inline-block',
            marginRight: '0.3em',
            opacity: 0,
            transform: initialTransform,
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&.visible': {
              opacity: 1,
              transform: finalTransform,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className={`word ${visibleItems.includes(index) ? 'visible' : ''}`}
          >
            {word}
          </span>
        ))}
      </Box>
    );
  }

  return (
    <Box
      component="span"
      className={className}
      sx={{
        display: 'inline-block',
        '& .letter': {
          display: 'inline-block',
          opacity: 0,
          transform: initialTransform,
          transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&.visible': {
            opacity: 1,
            transform: finalTransform,
          },
        },
      }}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`letter ${visibleItems.includes(index) ? 'visible' : ''}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Box>
  );
}

const slides: SlideData[] = [
  {
    id: 1,
    title: 'Leading IT Solutions Provider',
    subtitle: 'Excellence in Technology',
    description: 'Transforming businesses through innovative technology solutions and digital transformation services.',
    icon: TrendingUp,
    gradient: ['#2563eb', '#1e40af'],
    backgroundImage: '/images/slider/slide-1.png',
    stats: [
      { value: '500+', label: 'Projects Delivered' },
      { value: '200+', label: 'Happy Clients' },
      { value: '15+', label: 'Years Experience' },
    ],
  },
  {
    id: 2,
    title: 'Global Reach, Local Expertise',
    subtitle: 'Worldwide Presence',
    description: 'Serving clients across Pakistan and internationally with cutting-edge IT services and solutions.',
    icon: Business,
    gradient: ['#7c3aed', '#5b21b6'],
    backgroundImage: '/images/slider/slide-2.png',
    stats: [
      { value: '50+', label: 'Countries Served' },
      { value: '24/7', label: 'Support Available' },
      { value: '99%', label: 'Client Satisfaction' },
    ],
  },
  {
    id: 3,
    title: 'Trusted by Industry Leaders',
    subtitle: 'Proven Track Record',
    description: 'Partnering with enterprises and startups to deliver scalable, secure, and innovative technology solutions.',
    icon: People,
    gradient: ['#06b6d4', '#0891b2'],
    backgroundImage: '/images/slider/slide-3.png',
    stats: [
      { value: '100+', label: 'Enterprise Clients' },
      { value: '50+', label: 'Awards Won' },
      { value: '98%', label: 'Success Rate' },
    ],
  },
];

export default function Slider() {
  const theme = useTheme();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '60vh', sm: '70vh', md: '80vh' },
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${alpha(theme.palette.grey[900], 0.95)} 0%, ${alpha(theme.palette.primary.dark, 0.9)} 100%)`,
      }}
    >
      {/* Custom Navigation Buttons */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: 8, md: 24 },
          transform: 'translateY(-50%)',
          zIndex: 10,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <IconButton
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{
            bgcolor: alpha('#fff', 0.1),
            backdropFilter: 'blur(10px)',
            color: '#fff',
            border: `1px solid ${alpha('#fff', 0.2)}`,
            '&:hover': {
              bgcolor: alpha('#fff', 0.2),
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <ArrowBackIos sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: 8, md: 24 },
          transform: 'translateY(-50%)',
          zIndex: 10,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <IconButton
          onClick={() => swiperRef.current?.slideNext()}
          sx={{
            bgcolor: alpha('#fff', 0.1),
            backdropFilter: 'blur(10px)',
            color: '#fff',
            border: `1px solid ${alpha('#fff', 0.2)}`,
            '&:hover': {
              bgcolor: alpha('#fff', 0.2),
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <ArrowForwardIos sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background: rgba(255, 255, 255, 0.5); width: 12px; height: 12px; margin: 0 6px; border-radius: 50%; transition: all 0.3s;"></span>`;
          },
        }}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        speed={1000}
        className="enterprise-swiper"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {slides.map((slide) => {
          const IconComponent = slide.icon;
          return (
            <SwiperSlide key={slide.id}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundImage: slide.backgroundImage
                    ? `url(${slide.backgroundImage})`
                    : `linear-gradient(135deg, ${alpha(slide.gradient[0], 0.9)} 0%, ${alpha(slide.gradient[1], 0.9)} 100%)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: slide.backgroundImage
                      ? `linear-gradient(135deg, ${alpha(slide.gradient[0], 0.6)} 0%, ${alpha(slide.gradient[1], 0.6)} 100%)`
                      : `linear-gradient(135deg, ${alpha(slide.gradient[0], 0.85)} 0%, ${alpha(slide.gradient[1], 0.85)} 100%)`,
                    zIndex: 0,
                  },
                }}
              >
                {/* Animated Background Pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    animation: 'slide 20s linear infinite',
                    '@keyframes slide': {
                      '0%': { transform: 'translateX(0) translateY(0)' },
                      '100%': { transform: 'translateX(-100px) translateY(-100px)' },
                    },
                  }}
                />

                {/* Gradient Orbs */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: { xs: 300, md: 500 },
                    height: { xs: 300, md: 500 },
                    background: `radial-gradient(circle, ${alpha('#fff', 0.1)} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    animation: 'pulse 6s ease-in-out infinite',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: { xs: 300, md: 500 },
                    height: { xs: 300, md: 500 },
                    background: `radial-gradient(circle, ${alpha('#fff', 0.1)} 0%, transparent 70%)`,
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    animation: 'pulse 6s ease-in-out infinite 3s',
                  }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      color: '#fff',
                      maxWidth: 900,
                      mx: 'auto',
                    }}
                  >
                    {/* Icon - Flying from Top with Zoom */}
                    <Box
                      sx={{
                        display: 'inline-flex',
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: alpha('#fff', 0.1),
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${alpha('#fff', 0.2)}`,
                        opacity: 0,
                        transform: 'translateY(-50px) scale(0.5)',
                        animation: 'iconFlyIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards, float 3s ease-in-out 1.5s infinite',
                        '@keyframes iconFlyIn': {
                          '0%': {
                            opacity: 0,
                            transform: 'translateY(-50px) scale(0.5) rotate(-180deg)',
                          },
                          '100%': {
                            opacity: 1,
                            transform: 'translateY(0) scale(1) rotate(0deg)',
                          },
                        },
                        '@keyframes float': {
                          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
                          '50%': { transform: 'translateY(-15px) scale(1.05)' },
                        },
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: { xs: 40, md: 60 },
                          color: '#fff',
                        }}
                      />
                    </Box>

                    {/* Subtitle - Flying from Top */}
                    <Box
                      sx={{
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          display: 'block',
                          fontSize: { xs: '0.75rem', md: '1rem' },
                          letterSpacing: 3,
                          color: alpha('#fff', 0.9),
                          fontWeight: 600,
                          textTransform: 'uppercase',
                        }}
                      >
                        <AnimatedText
                          text={slide.subtitle}
                          direction="top"
                          delay={200}
                          animationType="word"
                        />
                      </Typography>
                    </Box>

                    {/* Title - Flying from Bottom with Zoom */}
                    <Box
                      sx={{
                        mb: 3,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                          fontWeight: 800,
                          color: '#fff',
                          textShadow: '0 4px 30px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)',
                          lineHeight: 1.2,
                          textAlign: 'center',
                        }}
                      >
                        <AnimatedText
                          text={slide.title}
                          direction="bottom"
                          delay={600}
                          animationType="word"
                        />
                      </Typography>
                    </Box>

                    {/* Description - Flying from Left */}
                    <Box
                      sx={{
                        mb: { xs: 4, md: 6 },
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{
                          fontSize: { xs: '1rem', md: '1.25rem' },
                          color: alpha('#fff', 0.9),
                          lineHeight: 1.7,
                          maxWidth: 700,
                          mx: 'auto',
                          fontWeight: 400,
                          textAlign: 'center',
                        }}
                      >
                        <AnimatedText
                          text={slide.description}
                          direction="right"
                          delay={1200}
                          animationType="word"
                        />
                      </Typography>
                    </Box>

                    {/* Stats - Flying from Bottom */}
                    {slide.stats && (
                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: { xs: 2, md: 4 },
                          justifyContent: 'center',
                          mt: 4,
                        }}
                      >
                        {slide.stats.map((stat, index) => (
                          <Card
                            key={index}
                            sx={{
                              minWidth: { xs: 120, md: 160 },
                              bgcolor: alpha('#fff', 0.1),
                              backdropFilter: 'blur(10px)',
                              border: `1px solid ${alpha('#fff', 0.2)}`,
                              opacity: 0,
                              transform: 'translateY(60px) scale(0.8)',
                              animation: `statFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${1800 + index * 200}ms forwards`,
                              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                              '@keyframes statFlyIn': {
                                '0%': {
                                  opacity: 0,
                                  transform: 'translateY(60px) scale(0.8) rotateX(90deg)',
                                },
                                '100%': {
                                  opacity: 1,
                                  transform: 'translateY(0) scale(1) rotateX(0deg)',
                                },
                              },
                              '&:hover': {
                                transform: 'translateY(-12px) scale(1.05)',
                                bgcolor: alpha('#fff', 0.2),
                                boxShadow: `0 12px 40px ${alpha('#000', 0.4)}`,
                                border: `1px solid ${alpha('#fff', 0.4)}`,
                              },
                            }}
                          >
                            <CardContent sx={{ textAlign: 'center', py: 3 }}>
                              <Typography
                                variant="h4"
                                sx={{
                                  fontWeight: 800,
                                  color: '#fff',
                                  mb: 0.5,
                                  fontSize: { xs: '1.5rem', md: '2rem' },
                                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                                }}
                              >
                                {stat.value}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: alpha('#fff', 0.9),
                                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                                  fontWeight: 500,
                                }}
                              >
                                {stat.label}
                              </Typography>
                            </CardContent>
                          </Card>
                        ))}
                      </Box>
                    )}
                  </Box>
                </Container>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Styles for Swiper */}
      <Box
        component="style"
        dangerouslySetInnerHTML={{
          __html: `
            .enterprise-swiper .swiper-pagination {
              bottom: 24px !important;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .enterprise-swiper .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.5) !important;
              width: 12px !important;
              height: 12px !important;
              margin: 0 6px !important;
              opacity: 1 !important;
              transition: all 0.3s ease-in-out !important;
            }
            .enterprise-swiper .swiper-pagination-bullet-active {
              background: #fff !important;
              width: 32px !important;
              border-radius: 6px !important;
              transform: scale(1.2);
            }
            .enterprise-swiper .swiper-slide {
              opacity: 0 !important;
              transition: opacity 1s ease-in-out !important;
            }
            .enterprise-swiper .swiper-slide-active {
              opacity: 1 !important;
            }
          `,
        }}
      />
    </Box>
  );
}
