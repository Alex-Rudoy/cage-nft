import { useTypedSelector } from '@store/useTypedSelector';

export const useCustomersOverviewSelector = () =>
  useTypedSelector((state) => state.customersOverview);
