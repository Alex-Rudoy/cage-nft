import { useTypedSelector } from '@hooks/useTypedSelector';

export const useCustomersOverviewSelector = () =>
  useTypedSelector((state) => state.customersOverview);
