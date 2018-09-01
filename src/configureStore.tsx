import { createStore, applyMiddleware } from "redux";
// import { createEpicMiddleware } from 'redux-observable';
import createHistory from "history/createHashHistory";
// import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

// import root epic/reducer
// import rootEpic from './rootEpic';
import rootReducer from "./reducers/index";
// import queryString from 'query-string';
import { initialState } from "./constants/index";

// export `history` to use in index.js, we using `createBrowserHistory`
export const history = createHistory();
console.log(history);
// const epicMiddleware = createEpicMiddleware(rootEpic, {
//   dependencies: {
//     queryString
//   }
// });

function configureStore(initialState?: object) {
  // configure middlewares
  //   const middlewares = [epicMiddleware];
  // compose enhancers
  const appRouterMiddleware = routerMiddleware(history);
  const enhancer = applyMiddleware(appRouterMiddleware);
  // create store
  //   return createStore(rootReducer, initialState!, enhancer);
  return createStore(rootReducer, initialState!, enhancer);
}
// Build the middleware for intercepting and dispatching navigation actions

// const store = createStore(rootReducer, applyMiddleware(epicMiddleware), applyMiddleware(appRouterMiddleware));
const store = configureStore(initialState);

export default store;

// // import { createStore, applyMiddleware } from 'redux';
// import { createStore } from 'redux';
// // import { createEpicMiddleware } from 'redux-observable';

// // import rootEpic from './root-epic';
// // import services from '../services';

// // export const epicMiddleware = createEpicMiddleware(rootEpic, {
// //   dependencies: services,
// // });

// // pass an optional param to rehydrate state on app start
// const store = configureStore(initialState);

// // export store singleton instance
// export default store;
