import { all, fork } from 'redux-saga/effects';

import appSaga from './app/saga';
import photosSaga from './photos/saga';
import searchSaga from './search/saga';
import topicsSaga from './topics/saga';
import popupSage from './popup/saga';

function* sagas() {
  yield all([
    fork(appSaga),
    fork(photosSaga),
    fork(searchSaga),
    fork(topicsSaga),
    fork(popupSage),

  ]);
}

export default sagas;
