import { all } from 'redux-saga/effects';
import jokesSagas from './jokes/sagas';

export default function* rootSaga() {
  yield all([
    jokesSagas()
  ]);
}
