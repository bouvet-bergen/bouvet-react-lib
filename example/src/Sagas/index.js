import { all, takeEvery } from "redux-saga/effects";
import { types } from '../Common/types';
import { initApplication } from './applicationSaga';

export function* sagas() {
    yield all ([
        takeEvery(types.application.INIT_APPLICATION, initApplication)
    ]);
}