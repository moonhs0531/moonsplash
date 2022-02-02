import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';

import { ActionCreators, ActionTypes } from './slice';
import { getPhotosRest } from '../../api';
import { getPhotoByIdRest } from '../../api/photos/getPhotoByIdRest';
import { getPhotoRelatedRest } from '../../api/photos/getPhotoRelatedRest';

function* getPhotos({ payload }) {
  // 1. 비동기 통신
  // 결과를 reducer로 보낸다 -> 결과를 업데이트 할 수 있는 액션 호출
  // 2. 결과를 store 에 업데이트 => 결과를 업데이트 할 수 있는 액션을 디스패치 해준다.

  const state = yield select();
  // call(fn, arg)
  const data = yield call(getPhotosRest, payload);

  const photos = [
    ...state.photos.list,
    ...data,
  ];

  yield put(ActionCreators.setPhotos(photos));
}

function* getPhotoById({ payload }) {
  const results = yield call(getPhotoByIdRest, payload);
  yield put(ActionCreators.setPhotosById(results));
}

function* getPhotoRelated({ payload }) {
  const results = yield call(getPhotoRelatedRest, payload);
  yield put(ActionCreators.setPhotosRelated({
    ...results,
    id: payload,
  }));
}
// useDispatch -> put
// generator 실행 -> yield

function* saga() {
  yield takeLatest(ActionTypes.GET_PHOTOS, getPhotos);
  yield takeLatest(ActionTypes.GET_PHOTOS_BY_ID, getPhotoById);
  yield takeLatest(ActionTypes.GET_PHOTOS_RELATED, getPhotoRelated);
}

export default saga;
