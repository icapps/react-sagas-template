import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: true,
    logger: console
  });
  middleware.push(logger);
}

// If you want devTools, change 'window=undefined' in 'window=object'
const devTools = typeof window === 'undefined' &&
  typeof window.devToolsExtension !== 'undefined'
  ? window.devToolsExtension()
  : f => f;

const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware),
  devTools
)(createStore);

export default function configureStore(initialState = {}) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
