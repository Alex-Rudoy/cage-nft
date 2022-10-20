import { all, call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';

import {
  fetchAnonymousCustomersSuccessAction,
  fetchCustomersAction,
  fetchCustomersSuccessAction,
} from './customers.reducer';

// import { CustomersService } from '@api/CustomersService';
// import { errorHandleAction } from '@store/misc/notifications/notifications.reducer';

import {
  FetchAnonymousCustomersResponse,
  FetchCustomersResponse,
  TFetchAnonymousCustomersAction,
  TFetchCustomersAction,
} from './customers.types';

function* fetchCustomersSaga({ payload }: TFetchCustomersAction) {
  // try {
  //   const res: FetchCustomersResponse = yield call(
  //     CustomersService.getCustomers,
  //     {
  //       searchValue: payload,
  //       limit: 10000,
  //       offset: 0,
  //       // TODO: Monoj Karar Implement the limit and offset properly
  //     }
  //   );
  //   yield put(fetchCustomersSuccessAction(res.data.data));
  // } catch (error) {
  //   !+process.env.REACT_APP_HIDE_API_ERROR_NOTIFICATION &&
  //     (yield put(errorHandleAction(error)));
  // }
}

function* fetchAnonymousCustomersSaga({
                                        payload,
                                      }: TFetchAnonymousCustomersAction) {
  // try {
  //   const res: FetchAnonymousCustomersResponse = yield call(
  //     CustomersService.getAnonymousCustomers,
  //     {
  //       searchValue: payload,
  //       limit: 10000,
  //       offset: 0,
  //       // TODO: Monoj Karar Implement the limit and offset properly
  //     }
  //   );
  //   yield put(fetchAnonymousCustomersSuccessAction(res.data.data));
  // } catch (error) {
  //   !+process.env.REACT_APP_HIDE_API_ERROR_NOTIFICATION &&
  //     (yield put(errorHandleAction(error)));
  // }
}

export function* customersWatcher() {
  yield all([
    takeLatest(fetchCustomersAction.type, fetchCustomersSaga),
    takeLatest(fetchCustomersAction.type, fetchAnonymousCustomersSaga),
  ]);
}
