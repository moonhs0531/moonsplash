import { put, takeLatest } from 'redux-saga/effects';

import { ActionCreators, ActionTypes } from './slice';

function* openPopup() {
  yield put(ActionCreators.updateState(
    {
      visibility: true,
    },
  ));
}

function* saga() {
  yield takeLatest(ActionTypes.OPEN_POPUP, openPopup);
}

export default saga;
