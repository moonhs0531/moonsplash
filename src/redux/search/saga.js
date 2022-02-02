import {
  call, put, select, takeLatest,
} from 'redux-saga/effects';

import { ActionCreators, ActionTypes } from './slice';
import { getSearchCollectionsRest, getSearchPhotosRest, getSearchUsersRest } from '../../api';
import { getSearchRest } from '../../api/search/getSearchRest';

function* getSearchPhotos({ payload }) {
  const state = yield select();

  const { results, total, total_pages } = yield call(getSearchPhotosRest, payload); // 통신 call
  const prevResults = state.search.photos.results || [];

  const accResults = [
    ...prevResults,
    ...results,
  ];

  yield put(ActionCreators.setSearchPhotos({
    total,
    total_pages,
    results: accResults,
  })); // 업데이트 put
}

function* getSearchCollections({ payload }) {
  const state = yield select();

  const { results, total, total_pages } = yield call(getSearchCollectionsRest, payload);
  const prevResults = state.search.collections.results || [];

  const accResults = [
    ...prevResults,
    ...results,
  ];

  yield put(ActionCreators.setSearchCollections({
    total,
    total_pages,
    results: accResults,
  }));
}

function* getSearchUsers({ payload }) {
  const state = yield select();

  const { results, total, total_pages } = yield call(getSearchUsersRest, payload);
  const prevResults = state.search.users.results || [];

  const accResults = [
    ...prevResults,
    ...results,
  ];

  yield put(ActionCreators.setSearchUsers(
    // ...data,
    // ...accResults
    {
      total,
      total_pages,
      results: accResults,
    },
  ));
}

function* getSearch({ payload }) {
  const searchResults = yield call(getSearchRest, payload);
  yield put(ActionCreators.setSearch(
    searchResults,
  ));

  console.log('@@', searchResults);
}

function* saga() {
  yield takeLatest(ActionTypes.GET_SEARCH, getSearch);
  yield takeLatest(ActionTypes.GET_SEARCH_PHOTOS, getSearchPhotos);
  yield takeLatest(ActionTypes.GET_SEARCH_COLLECTIONS, getSearchCollections);
  yield takeLatest(ActionTypes.GET_SEARCH_USERS, getSearchUsers);
}

export default saga;
