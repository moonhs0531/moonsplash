import {call, put, select, takeLatest} from 'redux-saga/effects';
import {ActionCreators, ActionTypes} from "./slice";
import {getSearchCollectionsRest, getSearchPhotosRest, getSearchUsersRest} from "../../api";

function* getSearchPhotos({ payload }){
    const data = yield call(getSearchPhotosRest, payload); //통신 call

    yield put(ActionCreators.setSearchPhotos(data)); // 업데이트 put
}

function* getSearchCollections({ payload }){

    const data = yield call(getSearchCollectionsRest, payload);

    yield put(ActionCreators.setSearchCollections(data));
}

function* getSearchUsers({ payload }){
    const state = yield select();

    const data = yield call(getSearchUsersRest, payload)

    const searchUsers = [
        ...state.search.users.results,
        ...data
    ]

    yield put(ActionCreators.setSearchUsers(searchUsers))
}

function* saga() {
    yield takeLatest(ActionTypes.GET_SEARCH_PHOTOS, getSearchPhotos)
    yield takeLatest(ActionTypes.GET_SEARCH_COLLECTIONS, getSearchCollections)
    yield takeLatest(ActionTypes.GET_SEARCH_USERS, getSearchUsers)
}

export default saga;

