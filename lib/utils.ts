/**
 * Utility functions for the ZeeShad application
 */

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export function formatPhoneNumber(phone: string): string {
  // Format phone number for display
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '+92 $1 $2 $3');
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

