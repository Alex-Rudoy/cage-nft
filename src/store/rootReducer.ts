import { combineReducers } from '@reduxjs/toolkit';
import customerDetailsReducer from './customers/customerDetails/customerDetails.reducer';
import customersReducer from './customers/customers/customers.reducer';
import customersOverviewReducer from './customers/customersOverview/customersOverview.reducer';

export default combineReducers({
  // customers
  customers: customersReducer,
  customersOverview: customersOverviewReducer,
  customerDetails: customerDetailsReducer,
});
