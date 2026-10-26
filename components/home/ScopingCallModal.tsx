'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetForm, submitLeadRequest } from '@/store/slices/contactSlice';
import { SCOPING_QUIZ } from '@/lib/content/scopingQuiz';
import { WS } from '@/lib/wsDesign';

type Props = {
  open: boolean;
  onClose: () => void;
};

type Answers = Record<string, string>;

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    fontFamily: WS.fontBody,
    bgcolor: '#F7F9FC',
    '& fieldset': { borderColor: 'rgba(36,87,245,0.12)' },
    '&:hover fieldset': { borderColor: 'rgba(36,87,245,0.35)' },
    '&.Mui-focused fieldset': { borderColor: WS.cyan, borderWidth: 1.5 },
  },
  '& .MuiInputLabel-root': { fontFamily: WS.fontBody },
  '& .MuiInputLabel-root.Mui-focused': { color: WS.cyan },
};

export default function ScopingCallModal({ open, onClose }: Props) {
  const dispatch = useAppDispatch();
  const { isSubmitting, submitStatus, error } = useAppSelector((s) => s.contact);

  const totalSteps = SCOPING_QUIZ.steps.length + 1; // + details
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setAnswers({});
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setLocalError(null);
    setDone(false);
    dispatch(resetForm());
  }, [open, dispatch]);

  useEffect(() => {
    if (submitStatus === 'success') setDone(true);
  }, [submitStatus]);

  const progress = useMemo(() => ((step + 1) / totalSteps) * 100, [step, totalSteps]);
  const isDetails = step >= SCOPING_QUIZ.steps.length;
  const current = !isDetails ? SCOPING_QUIZ.steps[step] : null;

  const selectOption = (value: string) => {
    if (!current) return;
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    setLocalError(null);
    window.setTimeout(() => setStep((s) => Math.min(s + 1, totalSteps - 1)), 180);
  };

  const goNext = () => {
    if (!isDetails) {
      if (!answers[current!.id]) {
        setLocalError('Please select an option to continue.');
        return;
      }
      setLocalError(null);
      setStep((s) => s + 1);
      return;
    }

    if (!name.trim() || !email.trim()) {
      setLocalError('Name and email are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setLocalError('Please enter a valid email.');
      return;
    }

    const role = answers.role || '—';
    const need = answers.need || '—';
    const timeline = answers.timeline || '—';

    dispatch(
      submitLeadRequest({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company.trim(),
        service: need,
        message: [
          'Scoping call qualification',
          `Role: ${role}`,
          `Need: ${need}`,
          `Timeline: ${timeline}`,
        ].join('\n'),
        privacyAccepted: true,
        website: '',
      })
    );
  };

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      disableScrollLock
      PaperProps={{
        sx: {
          borderRadius: { xs: '16px', md: '20px' },
          overflow: 'hidden',
          m: { xs: 1.5, sm: 2 },
          maxHeight: { xs: '92vh', md: '90vh' },
          bgcolor: WS.white,
          boxShadow: '0 30px 80px rgba(11,19,36,0.22)',
        },
      }}
      slotProps={{
        backdrop: {
          sx: { bgcolor: 'rgba(0,16,36,0.55)', backdropFilter: 'blur(4px)' },
        },
      }}
    >
      <Box sx={{ position: 'relative', bgcolor: WS.dark, color: WS.white, px: { xs: 2.5, md: 3.5 }, pt: 2.5, pb: 2.25 }}>
        <IconButton
          aria-label="Close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'rgba(255,255,255,0.85)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>

        <Typography
          sx={{
            fontFamily: WS.fontBody,
            fontWeight: 500,
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: WS.orange,
            mb: 0.75,
          }}
        >
          Scoping Call
        </Typography>
        <Typography
          sx={{
            fontFamily: WS.fontDisplay,
            fontWeight: 700,
            fontSize: { xs: '1.35rem', md: '1.65rem' },
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            pr: 4,
            mb: 0.75,
          }}
        >
          {done ? SCOPING_QUIZ.successTitle : SCOPING_QUIZ.title}
        </Typography>
        {!done && (
          <Typography sx={{ fontFamily: WS.fontBody, fontSize: '14px', color: 'rgba(255,255,255,0.7)', maxWidth: 420, lineHeight: 1.55 }}>
            {SCOPING_QUIZ.subtitle}
          </Typography>
        )}

        {!done && (
          <Box sx={{ mt: 2.25, height: 4, borderRadius: 999, bgcolor: 'rgba(255,255,255,0.12)', overflow: 'hidden' }}>
            <Box sx={{ height: '100%', width: `${progress}%`, bgcolor: WS.cyan, transition: 'width 0.3s ease', borderRadius: 999 }} />
          </Box>
        )}
        {!done && (
          <Typography sx={{ mt: 1, fontFamily: WS.fontBody, fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>
            Step {step + 1} of {totalSteps}
          </Typography>
        )}
      </Box>

      <Box sx={{ px: { xs: 2.5, md: 3.5 }, py: { xs: 2.5, md: 3 }, overflowY: 'auto' }}>
        {done ? (
          <Box sx={{ textAlign: 'center', py: { xs: 2, md: 3 } }}>
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                bgcolor: 'rgba(36,87,245,0.12)',
                color: WS.cyan,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <CheckRoundedIcon sx={{ fontSize: 32 }} />
            </Box>
            <Typography sx={{ fontFamily: WS.fontBody, color: WS.slate, lineHeight: 1.7, mb: 3 }}>
              {SCOPING_QUIZ.successBody}
            </Typography>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                ...pillBtn,
                bgcolor: WS.cyan,
                '&:hover': { bgcolor: WS.orange },
              }}
            >
              Close
            </Button>
          </Box>
        ) : current ? (
          <>
            <Typography
              sx={{
                fontFamily: WS.fontDisplay,
                fontWeight: 700,
                fontSize: { xs: '1.15rem', md: '1.35rem' },
                color: WS.ink,
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              {current.question}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {current.options.map((opt) => {
                const selected = answers[current.id] === opt;
                return (
                  <Box
                    key={opt}
                    component="button"
                    type="button"
                    onClick={() => selectOption(opt)}
                    sx={{
                      textAlign: 'left',
                      cursor: 'pointer',
                      border: selected ? `1.5px solid ${WS.cyan}` : '1.5px solid rgba(11,19,36,0.08)',
                      bgcolor: selected ? 'rgba(36,87,245,0.06)' : WS.white,
                      borderRadius: '14px',
                      px: 2,
                      py: 1.6,
                      fontFamily: WS.fontBody,
                      fontSize: { xs: '14px', md: '15px' },
                      fontWeight: selected ? 600 : 500,
                      color: WS.ink,
                      transition: 'border-color 0.2s, background-color 0.2s, transform 0.15s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 1.5,
                      '&:hover': {
                        borderColor: WS.cyan,
                        bgcolor: 'rgba(36,87,245,0.04)',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    {opt}
                    {selected && (
                      <Box
                        sx={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          bgcolor: WS.cyan,
                          color: '#fff',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <CheckRoundedIcon sx={{ fontSize: 14 }} />
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </>
        ) : (
          <>
            <Typography
              sx={{
                fontFamily: WS.fontDisplay,
                fontWeight: 700,
                fontSize: { xs: '1.15rem', md: '1.35rem' },
                color: WS.ink,
                mb: 0.75,
                letterSpacing: '-0.02em',
              }}
            >
              {SCOPING_QUIZ.detailsTitle}
            </Typography>
            <Typography sx={{ fontFamily: WS.fontBody, fontSize: '14px', color: WS.slate, mb: 2.5, lineHeight: 1.6 }}>
              {SCOPING_QUIZ.detailsHint}
            </Typography>
            <Box sx={{ display: 'grid', gap: 1.75 }}>
              <TextField label="Full name *" value={name} onChange={(e) => setName(e.target.value)} fullWidth size="medium" sx={fieldSx} />
              <TextField label="Work email *" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth sx={fieldSx} />
              <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth sx={fieldSx} />
              <TextField label="Company" value={company} onChange={(e) => setCompany(e.target.value)} fullWidth sx={fieldSx} />
            </Box>
          </>
        )}

        {(localError || error) && !done && (
          <Typography sx={{ mt: 2, color: '#C62828', fontFamily: WS.fontBody, fontSize: '13px' }}>
            {localError || error}
          </Typography>
        )}

        {!done && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1.5, mt: 3 }}>
            <Button
              onClick={() => {
                setLocalError(null);
                setStep((s) => Math.max(0, s - 1));
              }}
              disabled={step === 0 || isSubmitting}
              startIcon={<ArrowBackRoundedIcon />}
              sx={{
                fontFamily: WS.fontBody,
                fontWeight: 600,
                textTransform: 'none',
                color: WS.slate,
                visibility: step === 0 ? 'hidden' : 'visible',
              }}
            >
              {SCOPING_QUIZ.ctaBack}
            </Button>

            {isDetails && (
              <Button
                onClick={goNext}
                disabled={isSubmitting}
                endIcon={isSubmitting ? <CircularProgress size={16} color="inherit" /> : <ArrowForwardRoundedIcon />}
                variant="contained"
                sx={{
                  ...pillBtn,
                  bgcolor: WS.cyan,
                  '&:hover': { bgcolor: WS.orange },
                  '&.Mui-disabled': { bgcolor: 'rgba(36,87,245,0.4)', color: '#fff' },
                }}
              >
                {isSubmitting ? 'Sending…' : SCOPING_QUIZ.ctaSubmit}
              </Button>
            )}
          </Box>
        )}
      </Box>
    </Dialog>
  );
}

const pillBtn = {
  fontFamily: WS.fontBody,
  fontWeight: 700,
  textTransform: 'capitalize' as const,
  borderRadius: '100px',
  px: 3,
  py: 1.35,
  boxShadow: 'none',
};
