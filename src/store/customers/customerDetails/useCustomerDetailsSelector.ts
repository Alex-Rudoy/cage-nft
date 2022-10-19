import { useTypedSelector } from '@hooks/useTypedSelector';

export const useCustomerDetailsSelector = () =>
  useTypedSelector((state) => state.customerDetails);
