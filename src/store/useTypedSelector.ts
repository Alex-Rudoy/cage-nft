import { useSelector, TypedUseSelectorHook } from 'react-redux';

// import { RootState } from '@store/index';

export const useTypedSelector: TypedUseSelectorHook<any> = useSelector;
