// import { useTypedSelector } from '@hooks/useTypedSelector';

// export const useCustomersSelector = () =>
//   useTypedSelector((state) => state.customers);


export const useCustomersSelector = () =>
  ((state) => state.customers);
