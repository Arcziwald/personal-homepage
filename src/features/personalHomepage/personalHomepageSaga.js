import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from './personalHomepageSlice';
import { getRepositories } from './personalHomepageAPI';

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(2000);
        const repositories = yield call(getRepositories);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export default function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}