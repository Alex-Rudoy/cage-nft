// date to DD Mon YYYY
export const parseDateToReadable = (date: Date): string =>
  date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

/// date to YYYY-MM-DD
export const parseDateToJSON = (date: Date): string =>
  date.toISOString().split('T')[0];
