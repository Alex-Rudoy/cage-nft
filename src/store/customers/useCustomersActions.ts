import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  fetchCustomerDetailsAction,
  fetchCustomerDetailsSuccessAction,
  actionFetchProfileEvents,
  actionFetchProfileEventsSuccess,
  actionFetchProfileEventsFailed,
  actionClearCustomerDetailsAll,
} from './customerDetails/customerDetails.reducer';
import {
  fetchCustomersAction,
  fetchAnonymousCustomersAction,
} from './customers/customers.reducer';
import { fetchCustomersOverviewAction } from './customersOverview/customersOverview.reducer';

export const useCustomersActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      fetchCustomersAction,
      fetchCustomersOverviewAction,
      fetchCustomerDetailsAction,
      fetchCustomerDetailsSuccessAction,
      actionFetchProfileEvents,
      actionFetchProfileEventsSuccess,
      actionFetchProfileEventsFailed,
      actionClearCustomerDetailsAll,
      fetchAnonymousCustomersAction,
    },
    dispatch
  );
};
