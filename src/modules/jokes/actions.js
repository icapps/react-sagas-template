import constants from './constants';

export const getJokeRequest = () => {
  return {
    type: constants.GET_JOKE_REQUEST
  };
};

export const getJokeFailed = error => {
  return {
    type: constants.GET_JOKE_FAILED,
    payload: { error }
  };
};

export const getJokeSuccess = joke => {
  return {
    type: constants.GET_JOKE_LOADED,
    payload: { joke }
  };
};
