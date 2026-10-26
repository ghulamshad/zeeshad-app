export const SCOPING_QUIZ = {
  title: 'Book Your Scoping Call',
  subtitle: 'Answer a few quick questions so we can prepare the right conversation for you.',
  steps: [
    {
      id: 'role',
      question: 'What describes you best?',
      options: [
        'Business Owner / Founder',
        'Marketing Lead',
        'Product / Ops Manager',
        'Agency Partner',
        'Other',
      ],
    },
    {
      id: 'need',
      question: 'What do you need help with?',
      options: [
        'Digital Marketing',
        'Website Development',
        'Mobile App Development',
        'Multiple services',
        'Not sure yet — need guidance',
      ],
    },
    {
      id: 'timeline',
      question: 'When are you looking to get started?',
      options: [
        'ASAP — this month',
        'In the next 1–3 months',
        'Exploring for later',
        'Just researching options',
      ],
    },
  ],
  detailsTitle: 'Almost there — how can we reach you?',
  detailsHint: 'We’ll use this to confirm your scoping call within one business day.',
  ctaOpen: 'Book My Scoping Call',
  ctaNext: 'Continue',
  ctaBack: 'Back',
  ctaSubmit: 'Book My Call',
  successTitle: 'You’re on the list',
  successBody: 'Thanks — our team will review your answers and reach out to schedule your scoping call shortly.',
} as const;
