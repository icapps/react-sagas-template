import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import constants from './constants';
import { getJokeSuccess, getJokeFailed } from './actions';

function* jokesSagas() {
  yield all([takeLatest(constants.GET_JOKE_REQUEST, getJoke)]);
}

function* getJoke() {
  try {
    const joke = yield call(APIgetJoke);
    yield put(getJokeSuccess(joke));
  } catch (e) {
    yield put(getJokeFailed(e));
  }
}

const APIgetJoke = async () => {
  const result = await axios(process.env.REACT_APP_API_HOST, {headers: { 'Accept': 'application/json'}});
  return result.data.joke;
};

export default jokesSagas;
