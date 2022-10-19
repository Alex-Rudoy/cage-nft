import { all, fork } from 'redux-saga/effects';

import { customerDetailsWatcher } from './customers/customerDetails/customerDetails.saga';
import { customersWatcher } from './customers/customers/customers.saga';
import { customersOverviewWatcher } from './customers/customersOverview/customersOverview.saga';

export default function* rootSaga() {
  yield all([
    // customers
    fork(customersWatcher),
    fork(customersOverviewWatcher),
    fork(customerDetailsWatcher),
  ]);
}
