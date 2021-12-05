import {call, put, takeLatest} from "redux-saga/effects";
import {ActionCreators, ActionTypes} from "./slice";
import {getTopicsRest} from "../../api";

function* getTopics({payload}){
    const data = yield call(getTopicsRest, payload);
    yield put(ActionCreators.setTopics(data));
}

function* saga() {
    yield takeLatest(ActionTypes.GET_TOPICS, getTopics)
}

export default saga;
