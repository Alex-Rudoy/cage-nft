import { TFunction } from 'i18next';

import { isoDateString } from '@typings/isoDateString';

export const semanticDateFromTimestamp = (
  timestamp: number | isoDateString,
  translate: TFunction
) => {
  const date = new Date(timestamp?.toString()?.replace('T', ' '));
  return isNaN(date.getTime())
    ? '-'
    : `${
        isToday(date)
          ? translate('common:today')
          : date.toISOString().slice(0, 10)
      } ${date.toISOString().slice(11, 19)}`;
};

const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  );
};
