// File - src/index.js

import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/style/hover.css";
import "./common/style/animate.css";
import "./index.css";
// Import store and history
import store, { history } from "./configureStore";

// import ContactUsForm from "./containers/ContactUsForm";

// common components
// import { Header } from "./common/containers/Header/Header";
import Menus from "./common/containers/Menus/Menus";
import { Footer } from "./common/containers/Footer/Footer";

// routes
import routes from "./routes";

// Render App
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        {/* <ContactUsForm /> */}
        {/* <Header /> */}
        <Menus />
        <div className="wrap">{routes}</div>
      <Footer />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

// // import App from "./App";
// import "./index.css";
// import registerServiceWorker from "./registerServiceWorker";
// // import { createStore } from "redux";
// // import reducers from "./reducers/index";
// // import { StoreState } from "./types/index";
// // import { EnthusiasmAction } from './actions/index';
// import { Provider } from "react-redux";
// // import Hello from "./containers/Hello";
// import ContactUsForm from "./containers/ContactUsForm";
// // import {initialState} from  "./constants/index";
// import store from "./configureStore";
// // const store = createStore(reducers, initialState);
// // console.log("store: ", store.getState());
// ReactDOM.render(
//   <Provider store={store}>
//     <ContactUsForm />
//   </Provider>,
//   document.getElementById("root") as HTMLElement
// );
// registerServiceWorker();
