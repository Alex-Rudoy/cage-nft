// import { useTypedSelector } from '@store/useTypedSelector';

// export const useCustomersOverviewSelector = () =>
//   useTypedSelector((state) => state.customersOverview);

export const useCustomersOverviewSelector = () =>
  ((state) => state.customersOverview);
